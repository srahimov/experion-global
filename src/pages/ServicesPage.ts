import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { URLS } from '../config/environment';

export class ServicesPage extends BasePage {

  // ─── Hero / Header ────────────────────────────────────────────────
  readonly pageHeading: Locator;
  readonly heroSubtitle: Locator;
  readonly aiPoweredHeading: Locator;
  readonly codeMeetsCognitionHeading: Locator;
  readonly redefiningHeading: Locator;
  readonly introParagraph: Locator;

  // ─── Services Section ─────────────────────────────────────────────
  readonly whatWeDoHeading: Locator;
  readonly readyToBringIdeasHeading: Locator;

  // Service cards — headings
  readonly softwareDevelopmentHeading: Locator;
  readonly qualityEngineeringHeading: Locator;
  readonly operationsAndSupportHeading: Locator;
  readonly strategyAndConsultingHeading: Locator;
  readonly experienceDesignHeading: Locator;

  // Service cards — links (each service links to its own sub-page)
  readonly softwareDevelopmentLink: Locator;
  readonly qualityEngineeringLink: Locator;
  readonly operationsAndSupportLink: Locator;
  readonly strategyAndConsultingLink: Locator;
  readonly experienceDesignLink: Locator;

  // Service cards — description text
  readonly softwareDevelopmentDescription: Locator;
  readonly qualityEngineeringDescription: Locator;
  readonly operationsAndSupportDescription: Locator;
  readonly strategyAndConsultingDescription: Locator;
  readonly experienceDesignDescription: Locator;

  // ─── Success Stories / Case Studies ───────────────────────────────
  readonly exploreHeading: Locator;
  readonly successStoriesHeading: Locator;
  readonly caseStudyLinks: Locator;
  readonly readMoreLinks: Locator;

  readonly insuranceCaseStudy: Locator;
  readonly investmentCaseStudy: Locator;
  readonly telehealthCaseStudy: Locator;
  readonly retailCaseStudy: Locator;
  readonly trafficCaseStudy: Locator;
  readonly logisticsCaseStudy: Locator;

  // ─── Inline Contact Form ───────────────────────────────────────────
  readonly contactFormSection: Locator;
  readonly contactFormHeading: Locator;
  readonly contactForm: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly messageInput: Locator;
  readonly privacyCheckbox: Locator;
  readonly sendButton: Locator;

  // ─── Footer ───────────────────────────────────────────────────────
  readonly footer: Locator;
  readonly footerProductEngineeringSection: Locator;
  readonly footerDigitalTransformationSection: Locator;
  readonly footerIndustriesSection: Locator;
  readonly footerInsightsSection: Locator;
  readonly footerAboutSection: Locator;
  readonly footerCareersSection: Locator;
  readonly footerCopyrightText: Locator;
  readonly footerPrivacyPolicyLink: Locator;
  readonly footerCookiePolicyLink: Locator;
  readonly footerTermsLink: Locator;
  readonly footerSocialLinks: Locator;
  readonly footerFacebookLink: Locator;
  readonly footerTwitterLink: Locator;
  readonly footerLinkedInLink: Locator;
  readonly footerInstagramLink: Locator;
  readonly footerYouTubeLink: Locator;

  // ─── Navigation ───────────────────────────────────────────────────
  readonly logoLink: Locator;
  readonly navProductEngineering: Locator;
  readonly navDigitalTransformation: Locator;
  readonly navIndustries: Locator;
  readonly navInsights: Locator;
  readonly navAboutUs: Locator;
  readonly navCareers: Locator;
  readonly navContactUs: Locator;

  constructor(page: Page) {
    super(page);

    // ─── Hero / Header ──────────────────────────────────────────────
    this.pageHeading                 = page.locator('h1').filter({ hasText: /Product Engineering Services/i });
    this.heroSubtitle                = page.locator('text=Your Product\'s Future Engineered with AI');
    this.aiPoweredHeading            = page.locator('h2').filter({ hasText: /AI-powered\. Product-obsessed\./i });
    this.codeMeetsCognitionHeading   = page.locator('h2').filter({ hasText: /Code Meets Cognition/i });
    this.redefiningHeading           = page.locator('h2').filter({ hasText: /Redefining Product Possibilities With AI/i });
    this.introParagraph              = page.locator('text=Welcome to our world');

    // ─── Services Section ────────────────────────────────────────────
    this.whatWeDoHeading             = page.locator('h2').filter({ hasText: /What We Do/i });
    this.readyToBringIdeasHeading    = page.locator('h2').filter({ hasText: /Ready to Bring Your Ideas to Life/i });

    // Headings
    this.softwareDevelopmentHeading  = page.locator('h3').filter({ hasText: /Software Development/i }).first();
    this.qualityEngineeringHeading   = page.locator('h3').filter({ hasText: /Quality Engineering/i }).first();
    this.operationsAndSupportHeading = page.locator('h3').filter({ hasText: /Operations & Support/i }).first();
    this.strategyAndConsultingHeading= page.locator('h3').filter({ hasText: /Strategy and Consulting/i }).first();
    this.experienceDesignHeading     = page.locator('h3').filter({ hasText: /Experience Design/i }).first();

    // Links
    this.softwareDevelopmentLink     = page.locator('a[href*="enterprise-software-development-services"]').first();
    this.qualityEngineeringLink      = page.locator('a[href*="quality-engineering-services"]').first();
    this.operationsAndSupportLink    = page.locator('a[href*="operations-support"]').first();
    this.strategyAndConsultingLink   = page.locator('a[href*="pe-strategy-consulting"]').first();
    this.experienceDesignLink        = page.locator('a[href*="experience-design"]').first();

    // Descriptions
    this.softwareDevelopmentDescription  = page.locator('text=AI-driven software solutions that solve complex problems').first();
    this.qualityEngineeringDescription   = page.locator('text=End-to-end testing services').first();
    this.operationsAndSupportDescription = page.locator('text=Monitoring, managing').first();
    this.strategyAndConsultingDescription= page.locator('text=optimize your product roadmap').first();
    this.experienceDesignDescription     = page.locator('text=intuitive interfaces to immersive interactions').first();

    // ─── Success Stories / Case Studies ─────────────────────────────
    this.exploreHeading              = page.locator('h2').filter({ hasText: /^Explore$/i });
    this.successStoriesHeading       = page.locator('h2').filter({ hasText: /Our Success Stories/i });
    this.readMoreLinks               = page.getByRole('link', { name: /Read More/i });
    this.caseStudyLinks              = page.locator('a[href*="experionglobal.com"]').filter({ hasText: /Read More/i });

    this.insuranceCaseStudy          = page.locator('h3').filter({ hasText: /Cloud-based Insurance Platform/i });
    this.investmentCaseStudy         = page.locator('h3').filter({ hasText: /investment advisory/i });
    this.telehealthCaseStudy         = page.locator('h3').filter({ hasText: /Telehealth/i });
    this.retailCaseStudy             = page.locator('h3').filter({ hasText: /Retail management/i });
    this.trafficCaseStudy            = page.locator('h3').filter({ hasText: /Urban Traffic/i });
    this.logisticsCaseStudy          = page.locator('h3').filter({ hasText: /logistics and transportation/i });

    // ─── Inline Contact Form ─────────────────────────────────────────
    this.contactFormSection          = page.locator('text=Contact Us').first();
    this.contactFormHeading          = page.locator('text=We\'d Love To Hear About Your Requirements');
    this.contactForm                 = page.locator('form[aria-label="Contact form"]');
    this.nameInput                   = page.locator('input[type="text"]').first();
    this.emailInput                  = page.locator('input[type="email"]').first();
    this.phoneInput                  = page.locator('input[type="tel"]').first();
    this.messageInput                = page.locator('textarea').first();
    this.privacyCheckbox             = page.locator('input[type="checkbox"]').last();
    this.sendButton                  = page.getByRole('button', { name: /Send/i });

    // ─── Footer ──────────────────────────────────────────────────────
    this.footer                             = page.locator('footer, [role="contentinfo"]');
    this.footerProductEngineeringSection    = page.locator('footer').getByRole('heading', { name: /Product Engineering/i });
    this.footerDigitalTransformationSection = page.locator('footer').getByRole('heading', { name: /Digital Transformation/i });
    this.footerIndustriesSection            = page.locator('footer').getByRole('heading', { name: /Industries/i });
    this.footerInsightsSection              = page.locator('footer').getByRole('heading', { name: /Insights/i });
    this.footerAboutSection                 = page.locator('footer').getByRole('heading', { name: /About Us/i });
    this.footerCareersSection               = page.locator('footer').getByRole('heading', { name: /Careers/i });
    this.footerCopyrightText                = page.locator('text=© 2026 Experion Technologies. All rights reserved.');
    this.footerPrivacyPolicyLink            = page.locator('a[href*="privacy-policy"]').last();
    this.footerCookiePolicyLink             = page.locator('a[href*="cookie-policy"]').last();
    this.footerTermsLink                    = page.locator('a[href*="terms-of-use"]').last();
    this.footerSocialLinks                  = page.locator('footer a[href*="facebook"], footer a[href*="twitter"], footer a[href*="linkedin"], footer a[href*="instagram"], footer a[href*="youtube"]');
    this.footerFacebookLink                 = page.locator('a[href*="facebook.com/experiontechnologies"]');
    this.footerTwitterLink                  = page.locator('a[href*="twitter.com/experionglobal"]');
    this.footerLinkedInLink                 = page.locator('a[href*="linkedin.com/company/experion-technologies"]');
    this.footerInstagramLink                = page.locator('a[href*="instagram.com/experion_technologies"]');
    this.footerYouTubeLink                  = page.locator('a[href*="youtube.com/@experiontechnologies"]');

    // ─── Navigation ──────────────────────────────────────────────────
    this.logoLink              = page.locator('a[href="https://experionglobal.com/"]').first();
    this.navProductEngineering = page.locator('a[href="https://experionglobal.com/product-engineering-services/"]').first();
    this.navDigitalTransformation = page.locator('a[href="https://experionglobal.com/digital-transformation-services/"]').first();
    this.navIndustries         = page.locator('a[href="https://experionglobal.com/industries/"]').first();
    this.navAboutUs            = page.locator('nav').getByRole('link', { name: /About Us/i });
    this.navCareers            = page.locator('nav').getByRole('link', { name: /Careers/i });
    this.navContactUs          = page.locator('a[href="https://experionglobal.com/contact-us/"]').first();
    this.navInsights           = page.locator('nav').getByRole('link', { name: /Insights/i });
  }

  // ─── Navigation Actions ────────────────────────────────────────────

  async goto(): Promise<void> {
    await this.navigateTo(URLS.SERVICES);
  }

  async clickLogo(): Promise<void> {
    await this.logoLink.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async clickNavContactUs(): Promise<void> {
    await this.navContactUs.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async clickService(serviceLink: Locator): Promise<void> {
    await serviceLink.scrollIntoViewIfNeeded();
    await serviceLink.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async clickSoftwareDevelopment(): Promise<void> {
    await this.clickService(this.softwareDevelopmentLink);
  }

  async clickQualityEngineering(): Promise<void> {
    await this.clickService(this.qualityEngineeringLink);
  }

  async clickOperationsAndSupport(): Promise<void> {
    await this.clickService(this.operationsAndSupportLink);
  }

  async clickStrategyAndConsulting(): Promise<void> {
    await this.clickService(this.strategyAndConsultingLink);
  }

  async clickExperienceDesign(): Promise<void> {
    await this.clickService(this.experienceDesignLink);
  }

  // ─── Contact Form Actions ──────────────────────────────────────────

  async fillContactForm(data: {
    name: string;
    email: string;
    phone?: string;
    message?: string;
  }): Promise<void> {
    await this.contactForm.scrollIntoViewIfNeeded();
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);
    if (data.phone) {
      await this.phoneInput.fill(data.phone);
    }
    if (data.message) {
      await this.messageInput.fill(data.message);
    }
  }

  async acceptPrivacyPolicy(): Promise<void> {
    await this.privacyCheckbox.check();
  }

  async submitContactForm(): Promise<void> {
    await this.sendButton.click();
  }

  // ─── Assertion Helpers ─────────────────────────────────────────────

  async assertPageLoaded(): Promise<void> {
    await this.assertPageTitle(/Product Engineering Services/i);
    await this.assertUrl(/product-engineering-services/i);
    await expect(this.pageHeading).toBeVisible({ timeout: 15000 });
  }

  async assertHeroSectionVisible(): Promise<void> {
    await expect(this.pageHeading).toBeVisible({ timeout: 15000 });
    await expect(this.heroSubtitle).toBeVisible({ timeout: 15000 });
  }

  async assertAiMessagingVisible(): Promise<void> {
    await expect(this.redefiningHeading).toBeVisible({ timeout: 15000 });
  }

  async assertWhatWeDoVisible(): Promise<void> {
    await this.whatWeDoHeading.scrollIntoViewIfNeeded();
    await expect(this.whatWeDoHeading).toBeVisible({ timeout: 15000 });
  }

  async assertAllServicesVisible(): Promise<void> {
    const services: Locator[] = [
      this.softwareDevelopmentHeading,
      this.qualityEngineeringHeading,
      this.operationsAndSupportHeading,
      this.strategyAndConsultingHeading,
      this.experienceDesignHeading,
    ];
    for (const service of services) {
      await service.scrollIntoViewIfNeeded();
      await expect(service).toBeVisible({ timeout: 15000 });
    }
  }

  async assertServiceDescriptionsVisible(): Promise<void> {
    const descriptions: Locator[] = [
      this.softwareDevelopmentDescription,
      this.qualityEngineeringDescription,
      this.operationsAndSupportDescription,
      this.strategyAndConsultingDescription,
      this.experienceDesignDescription,
    ];
    for (const desc of descriptions) {
      await desc.scrollIntoViewIfNeeded();
      await expect(desc).toBeVisible({ timeout: 15000 });
    }
  }

  async assertServiceLinksNavigable(): Promise<void> {
    const links: Locator[] = [
      this.softwareDevelopmentLink,
      this.qualityEngineeringLink,
      this.operationsAndSupportLink,
      this.strategyAndConsultingLink,
      this.experienceDesignLink,
    ];
    for (const link of links) {
      const href = await link.getAttribute('href');
      expect(href).toBeTruthy();
      expect(href).toContain('experionglobal.com');
    }
  }

  async assertSuccessStoriesSectionVisible(): Promise<void> {
    await this.successStoriesHeading.scrollIntoViewIfNeeded();
    await expect(this.successStoriesHeading).toBeVisible({ timeout: 15000 });
  }

  async assertAllCaseStudiesVisible(): Promise<void> {
    const caseStudies: Locator[] = [
      this.insuranceCaseStudy,
      this.investmentCaseStudy,
      this.telehealthCaseStudy,
      this.retailCaseStudy,
      this.trafficCaseStudy,
      this.logisticsCaseStudy,
    ];
    for (const cs of caseStudies) {
      await cs.scrollIntoViewIfNeeded();
      await expect(cs).toBeVisible({ timeout: 15000 });
    }
  }

  async assertReadMoreLinksPresent(): Promise<void> {
    const count = await this.readMoreLinks.count();
    expect(count).toBeGreaterThanOrEqual(6);
  }

  async assertContactFormVisible(): Promise<void> {
    await this.contactForm.scrollIntoViewIfNeeded();
    await expect(this.contactForm).toBeVisible({ timeout: 15000 });
    await expect(this.nameInput).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.phoneInput).toBeVisible();
    await expect(this.messageInput).toBeVisible();
    await expect(this.sendButton).toBeVisible();
  }

  async assertFooterVisible(): Promise<void> {
    await this.footer.scrollIntoViewIfNeeded();
    await expect(this.footer).toBeVisible({ timeout: 10000 });
  }

  async assertFooterSectionsVisible(): Promise<void> {
    const sections: Locator[] = [
      this.footerProductEngineeringSection,
      this.footerDigitalTransformationSection,
      this.footerIndustriesSection,
      this.footerInsightsSection,
      this.footerAboutSection,
      this.footerCareersSection,
    ];
    for (const section of sections) {
      await section.scrollIntoViewIfNeeded();
      await expect(section).toBeVisible({ timeout: 10000 });
    }
  }

  async assertFooterCopyrightVisible(): Promise<void> {
    await this.footerCopyrightText.scrollIntoViewIfNeeded();
    await expect(this.footerCopyrightText).toBeVisible({ timeout: 10000 });
  }

  async assertFooterSocialLinksPresent(): Promise<void> {
    const socialLinks: Locator[] = [
      this.footerFacebookLink,
      this.footerTwitterLink,
      this.footerLinkedInLink,
      this.footerInstagramLink,
      this.footerYouTubeLink,
    ];
    for (const link of socialLinks) {
      const href = await link.getAttribute('href');
      expect(href).toBeTruthy();
    }
  }

  async assertFooterLegalLinksPresent(): Promise<void> {
    await expect(this.footerPrivacyPolicyLink).toBeVisible({ timeout: 10000 });
    await expect(this.footerCookiePolicyLink).toBeVisible({ timeout: 10000 });
    await expect(this.footerTermsLink).toBeVisible({ timeout: 10000 });
  }

  async getReadMoreLinksCount(): Promise<number> {
    return this.readMoreLinks.count();
  }

  async getSocialLinksCount(): Promise<number> {
    return this.footerSocialLinks.count();
  }
}