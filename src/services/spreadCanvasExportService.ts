import { Language, ReadingResultData } from '../types/tarot';
import { UserProfile } from '../types/userProfile';
import { TarotSynergyService } from './tarotSynergyService';

export interface CanvasExportOptions {
  format?: 'landscape' | 'square' | 'story';
}

export class SpreadCanvasExportService {
  /**
   * Generates a high-resolution PNG image of the tarot reading and triggers download.
   */
  public static async exportSpreadImage(
    reading: ReadingResultData,
    language: Language = 'en',
    userProfile?: UserProfile | null,
    options: CanvasExportOptions = {}
  ): Promise<string> {
    const format = options.format || 'landscape';
    
    // Canvas dimensions (2x crisp resolution)
    let width = 2400;
    let height = 1350; // 16:9
    if (format === 'square') {
      width = 1800;
      height = 1800;
    } else if (format === 'story') {
      width = 1200;
      height = 2133; // 9:16
    }

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get 2d context');

    // 1. Background Fill: Warm Obsidian Charcoal (#0c0a09)
    ctx.fillStyle = '#0c0a09';
    ctx.fillRect(0, 0, width, height);

    // Subtle background grid lines
    ctx.strokeStyle = 'rgba(41, 37, 36, 0.4)';
    ctx.lineWidth = 1;
    const gridSize = 60;
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // 2. Double-Bezel Outer Border Frame
    const padding = 50;
    ctx.strokeStyle = '#292524';
    ctx.lineWidth = 2;
    ctx.strokeRect(padding, padding, width - padding * 2, height - padding * 2);

    ctx.strokeStyle = '#78716c';
    ctx.lineWidth = 1;
    ctx.strokeRect(padding + 10, padding + 10, width - (padding + 10) * 2, height - (padding + 10) * 2);

    // Corner decorative markers
    this.drawCornerGlyphs(ctx, padding + 10, width, height);

    // 3. Header Section
    const headerTop = padding + 60;
    
    // Brand pill
    ctx.fillStyle = '#141210';
    const pillWidth = 280;
    const pillHeight = 36;
    const pillX = (width - pillWidth) / 2;
    this.roundRect(ctx, pillX, headerTop, pillWidth, pillHeight, 6);
    ctx.fill();
    ctx.strokeStyle = '#292524';
    ctx.stroke();

    ctx.fillStyle = '#a8a29e';
    ctx.font = '600 16px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('✦ ARCANIUM ORACLE DECREE ✦', width / 2, headerTop + 24);

    // Spread Title
    ctx.fillStyle = '#f5f5f4';
    ctx.font = 'bold 44px serif';
    const spreadTitle = reading.spread.name[language] || reading.spread.name.en;
    ctx.fillText(spreadTitle.toUpperCase(), width / 2, headerTop + 90);

    // Inscribed Question
    ctx.fillStyle = '#d6d3d1';
    ctx.font = 'italic 26px serif';
    const questionText = `"${reading.question}"`;
    ctx.fillText(questionText, width / 2, headerTop + 132);

    // Metadata (Querent + Date)
    const dateStr = new Date(reading.timestamp).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
    const querentName = userProfile?.name || 'Seeker of Truth';
    const zodiacStr = userProfile?.zodiacSign ? ` • ${userProfile.zodiacSign.name[language]}` : '';
    ctx.fillStyle = '#78716c';
    ctx.font = '500 18px monospace';
    ctx.fillText(`Querent: ${querentName}${zodiacStr}  |  ${dateStr}`, width / 2, headerTop + 168);

    // 4. Draw Cards
    const cards = reading.drawnCards;
    const cardAreaTop = headerTop + 210;
    const cardAreaHeight = height - cardAreaTop - 180;

    await this.drawCardsLayout(ctx, cards, language, width, cardAreaTop, cardAreaHeight, format);

    // 5. Bottom Plaque Summary
    const footerTop = height - padding - 90;
    
    // Background plate for summary
    const footerWidth = width - (padding + 30) * 2;
    const footerX = padding + 30;
    ctx.fillStyle = '#141210';
    this.roundRect(ctx, footerX, footerTop, footerWidth, 68, 10);
    ctx.fill();
    ctx.strokeStyle = '#292524';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Summary Metrics
    const quint = TarotSynergyService.calculateQuintessence(reading.drawnCards, language);
    const shadowNumber = quint ? (22 - quint.number) % 22 : 0;
    const cardTitle = quint?.cardName[language] || quint?.cardName.en || '';
    const quintText = quint ? `Primary Quintessence: ${quint.number} (${cardTitle}) • Shadow: ${shadowNumber}` : 'Hermetic Oracle Synthesis';
    
    ctx.fillStyle = '#f5f5f4';
    ctx.font = '600 18px serif';
    ctx.textAlign = 'left';
    ctx.fillText(`✦ ${quintText}`, footerX + 24, footerTop + 40);

    ctx.fillStyle = '#a8a29e';
    ctx.font = '500 15px monospace';
    ctx.textAlign = 'right';
    ctx.fillText('78 KEYS OF WISDOM • ARCANIUM.APP', footerX + footerWidth - 24, footerTop + 40);

    // Convert to Data URL and trigger download
    const dataUrl = canvas.toDataURL('image/png', 1.0);
    const link = document.createElement('a');
    link.download = `arcanium-reading-${Date.now()}.png`;
    link.href = dataUrl;
    link.click();

    return dataUrl;
  }

  /**
   * Layout cards across available area with image loading
   */
  private static async drawCardsLayout(
    ctx: CanvasRenderingContext2D,
    cards: ReadingResultData['drawnCards'],
    language: Language,
    canvasWidth: number,
    top: number,
    areaHeight: number,
    format: 'landscape' | 'square' | 'story'
  ): Promise<void> {
    const cardCount = cards.length;
    if (cardCount === 0) return;

    // Determine grid layout (rows and columns)
    let cols = cardCount;
    let rows = 1;
    if (cardCount > 5 || format === 'square' || format === 'story') {
      if (cardCount <= 4) {
        cols = 2;
        rows = Math.ceil(cardCount / 2);
      } else if (cardCount <= 6) {
        cols = 3;
        rows = 2;
      } else if (cardCount <= 8) {
        cols = 4;
        rows = 2;
      } else {
        cols = 5;
        rows = 2;
      }
    }

    const availableWidth = canvasWidth - 200;
    const cellWidth = availableWidth / cols;
    const cellHeight = areaHeight / rows;

    const cardWidth = Math.min(cellWidth * 0.78, 200);
    const cardHeight = cardWidth * 1.62; // Standard tarot 1 : 1.62 ratio

    for (let i = 0; i < cardCount; i++) {
      const drawnCard = cards[i];
      const col = i % cols;
      const row = Math.floor(i / cols);

      const cellCenterX = 100 + col * cellWidth + cellWidth / 2;
      const cellCenterY = top + row * cellHeight + cellHeight / 2;

      const cardX = cellCenterX - cardWidth / 2;
      const cardY = cellCenterY - cardHeight / 2;

      // Draw Card Frame & Bezel
      ctx.save();
      
      // If card is reversed, draw inverted
      if (drawnCard.isReversed) {
        ctx.translate(cellCenterX, cellCenterY);
        ctx.rotate(Math.PI);
        ctx.translate(-cellCenterX, -cellCenterY);
      }

      // Draw Outer Card Container
      ctx.fillStyle = '#141210';
      this.roundRect(ctx, cardX, cardY, cardWidth, cardHeight, 10);
      ctx.fill();
      ctx.strokeStyle = '#292524';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Card Image or stylized fallback
      if (drawnCard.card.file) {
        try {
          const img = await this.loadImage(`/cards/${drawnCard.card.file}`);
          ctx.save();
          this.roundRect(ctx, cardX + 3, cardY + 3, cardWidth - 6, cardHeight - 6, 8);
          ctx.clip();
          ctx.drawImage(img, cardX + 3, cardY + 3, cardWidth - 6, cardHeight - 6);
          ctx.restore();
        } catch {
          this.drawFallbackCardArt(ctx, drawnCard, cardX, cardY, cardWidth, cardHeight);
        }
      } else {
        this.drawFallbackCardArt(ctx, drawnCard, cardX, cardY, cardWidth, cardHeight);
      }

      ctx.restore();

      // Draw Position Label & Card Name Below Card (Always upright)
      const labelY = cellCenterY + cardHeight / 2 + 24;
      
      // Position badge
      ctx.fillStyle = '#a8a29e';
      ctx.font = '600 13px monospace';
      ctx.textAlign = 'center';
      const posName = drawnCard.position?.name[language] || drawnCard.position?.name.en || `Key ${i + 1}`;
      ctx.fillText(posName.toUpperCase(), cellCenterX, labelY);

      // Card Name + Reversed status
      ctx.fillStyle = '#f5f5f4';
      ctx.font = 'bold 15px serif';
      const cardName = drawnCard.card.name[language] || drawnCard.card.name.en;
      const revTag = drawnCard.isReversed ? (language === 'my' ? ' (ပြောင်းပြန်)' : language === 'ja' ? ' (逆位置)' : ' (Rx)') : '';
      ctx.fillText(`${cardName}${revTag}`, cellCenterX, labelY + 22);
    }
  }

  /**
   * Helper to load an image into an HTMLImageElement
   */
  private static loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image at ${src}`));
      img.src = src;
    });
  }

  /**
   * Draw decorative placeholder when image is unavailable
   */
  private static drawFallbackCardArt(
    ctx: CanvasRenderingContext2D,
    dc: ReadingResultData['drawnCards'][0],
    x: number,
    y: number,
    w: number,
    h: number
  ) {
    ctx.fillStyle = '#1c1917';
    ctx.fillRect(x + 4, y + 4, w - 8, h - 8);

    ctx.strokeStyle = '#292524';
    ctx.strokeRect(x + 10, y + 10, w - 20, h - 20);

    ctx.fillStyle = '#f5f5f4';
    ctx.font = 'bold 22px serif';
    ctx.textAlign = 'center';
    ctx.fillText(dc.card.number?.toString() || '✦', x + w / 2, y + h / 2 - 10);

    ctx.fillStyle = '#a8a29e';
    ctx.font = '12px monospace';
    ctx.fillText(dc.card.element || 'Arcana', x + w / 2, y + h / 2 + 18);
  }

  /**
   * Corner Glyphs
   */
  private static drawCornerGlyphs(ctx: CanvasRenderingContext2D, offset: number, w: number, h: number) {
    ctx.fillStyle = '#78716c';
    ctx.font = '14px serif';
    ctx.textAlign = 'center';
    ctx.fillText('✦', offset + 12, offset + 16);
    ctx.fillText('✦', w - offset - 12, offset + 16);
    ctx.fillText('✦', offset + 12, h - offset - 8);
    ctx.fillText('✦', w - offset - 12, h - offset - 8);
  }

  /**
   * Rounded rectangle helper
   */
  private static roundRect(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    r: number
  ) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }
}
