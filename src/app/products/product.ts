export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: string;
    description: string;
    starRating: number;
    imageUrl: string;

    seqId: string;
    subscriptionName: string;
    subscriptionBeginDate: string;
    subscriptionEndDate: string;
    subscriptionStatus: string;
    fileTransferMethod: string;
    fileTransferId: string;
    fileTransferDirectory: string;
    fileSubscriptionCases: string;
    docuSignSubscriptionFiles: string;

    cases: string;

    censusFile: string;
    censusFileBeginDate: string;
    censusFileEndDate: string;
    censusFileCreateWhenEmpty: string;
    censusFileInternalEmailNotificationAddress: string;

    sraFile: string;
    sraFileBeginDate: string;
    sraFileEndDate: string;
    sraFileCreateWhenEmpty: string;
    sraFileInternalEmailNotificationAddress: string;

    enrollmentFile: string;
    enrollmentFileBeginDate: string;
    enrollmentFileEndDate: string;
    enrollmentFileCreateWhenEmpty: string;
    enrollmentFileInternalEmailNotificationAddress: string;

    transferMethod: string;
    transferId: string;
    transferDirectory: string;

    pdfFile: string;
    pdfFileBeginDate: string;
    pdfFileEndDate: string;
}