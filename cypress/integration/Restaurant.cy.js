describe("Restaurant", () => {
  it("tests Restaurant", () => {
    cy.viewport(1595, 251);
    cy.visit("http://127.0.0.1:5500/Assignment1/home.html");
    cy.get("nav > a:nth-of-type(1)").click();
    cy.location("href").should("eq", "http://127.0.0.1:5500/Assignment1/home.html");
    cy.get("nav > a:nth-of-type(2)").click();
    cy.location("href").should("eq", "http://127.0.0.1:5500/Assignment1/about.html");
    cy.get("div a:nth-of-type(1)").click();
    cy.location("href").should("eq", "http://127.0.0.1:5500/Assignment1/calendar.html");
    cy.get("div a:nth-of-type(2)").click();
    cy.location("href").should("eq", "http://127.0.0.1:5500/Assignment1/gallery.html");
    cy.get("#lbNext").dblclick();
    cy.get("img:nth-of-type(3)").click();
    cy.get("#lbOverlayClose").click();
    cy.get("div a:nth-of-type(3)").click();
    cy.location("href").should("eq", "undefined");
    cy.get("a:nth-of-type(4)").click();
    cy.location("href").should("eq", "undefined");
    cy.get("a:nth-of-type(5)").click();
    cy.location("href").should("eq", "undefined");
    cy.get("#name").click();
    cy.get("#name").type("Jackie Zhou (Legal Name: Wen Feng Zhou)");
    cy.get("#email").type("jzhou39@gmail.com");
    cy.get("#message").type("Zhou)");
    cy.get("main button").click();
    cy.location("href").should("eq", "undefined");
    cy.get("a:nth-of-type(5)").click();
    cy.location("href").should("eq", "undefined");
    cy.get("a:nth-of-type(6)").click();
    cy.location("href").should("eq", "undefined");
    cy.get("button:nth-of-type(2)").click();
    cy.get("a:nth-of-type(7)").click();
    cy.location("href").should("eq", "undefined");
    cy.get("section:nth-of-type(1) > ul > li:nth-of-type(3) > a").click();
    cy.location("href").should("eq", "undefined");
  });
});
//# recorderSourceMap=BCBDBECGCICKCMBNBOBPCRCTCVBWBXBYBZCbCdCfBgBCiBC
