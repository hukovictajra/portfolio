import { useState, useEffect } from "react";
import Toggle from "../../elements/Toggle/Toggle";
import { Document, Page, pdfjs } from "react-pdf";
import { ItemArrowIcon, LoaderIcon, PaginationArrowIcon, DownloadIcon, ArrowRoundedIcon } from "@assets/icons";

import "react-pdf/dist/esm/Page/TextLayer.css";
import "./Resume.scss";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function Resume() {
	const [totalPages, setTotalPages] = useState(0);
	const [pageNumber, setPageNumber] = useState(1);
	const [showIframe, setShowIframe] = useState(false);
	const [scale, setScale] = useState(getScale(document.documentElement.clientWidth));

	const resumeFile = require("../../assets/files/pdf/resume.pdf");

	function onDocumentLoadSuccess({ numPages }) {
		setTotalPages(numPages);
	}

	function onDocumentLoadError() {
		setShowIframe(true);
	}

	function goToPreviousPage() {
		setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
	}

	function goToNextPage() {
		setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, totalPages));
	}

	function getScale(windowWidth) {
		if (windowWidth <= 576) {
			return 0.5;
		} else if (windowWidth <= 768) {
			return 1.2;
		} else if (windowWidth <= 992) {
			return 0.8;
		} else if (windowWidth <= 1200) {
			return 1.1;
		} else {
			return 1.2;
		}
	}

	function downloadPDF() {
		if (!showIframe) {
			var anchorElement = document.createElement("a");
			anchorElement.href = resumeFile;
			anchorElement.download = "tajra_hukovic_resume_2024.pdf";
			anchorElement.click();
		}
	}

	useEffect(() => {
		const handleResize = () => {
			setScale(getScale(document.documentElement.clientWidth));
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div id="resume">
			<div className="resume-go-back-button" onClick={() => window.history.back()}>
				<ItemArrowIcon className="resume-go-back-button-icon" />
				<span className="underline-effect">Go Back</span>
			</div>

			<div className="resume-content">
				<div className="resume-navigation-controls">
					<Toggle
						className="resume-navigation-toggle"
						onLabel="frame"
						offLabel="page"
						onClick={() => setShowIframe(!showIframe)}
					/>

					<span className={`resume-navigation-pagination ${showIframe && "resume-navigation-disabled"}`}>
						<span
							className={`navigation-icon-md navigation-icon-previous ${
								pageNumber <= 1 && "resume-navigation-disabled"
							}`}
							onClick={goToPreviousPage}
						>
							<PaginationArrowIcon />
						</span>
						Page {pageNumber} of {totalPages}
						<span
							className={`navigation-icon-md navigation-icon-next ${
								pageNumber >= totalPages && "resume-navigation-disabled"
							}`}
							onClick={goToNextPage}
						>
							<PaginationArrowIcon />
						</span>
					</span>

					<span
						className={`resume-navigation-download ${showIframe && "resume-navigation-disabled"}`}
						onClick={downloadPDF}
					>
						Download
						<DownloadIcon className="resume-navigation-download-icon" />
					</span>
				</div>

				{showIframe ? (
					<iframe className="resume-iframe" title="Tajra Huković Résumé" src={resumeFile} />
				) : (
					<div className="resume-pdf-document-wrapper">
						<Document
							file={resumeFile}
							className="resume-pdf-document"
							onLoadSuccess={onDocumentLoadSuccess}
							onLoadError={onDocumentLoadError}
							loading={
								<div className="resume-pdf-loader">
									<LoaderIcon />
								</div>
							}
						>
							<Page pageNumber={pageNumber} scale={scale} className="resume-pdf-page" renderAnnotationLayer={false} />
						</Document>

						<div className="resume-navigation">
							<div
								onClick={goToPreviousPage}
								className={`resume-page-button resume-previous-page ${pageNumber <= 1 && "resume-navigation-disabled"}`}
							>
								<ArrowRoundedIcon />
							</div>

							<div
								onClick={goToNextPage}
								className={`resume-page-button resume-next-page ${
									pageNumber >= totalPages && "resume-navigation-disabled"
								}`}
							>
								<ArrowRoundedIcon />
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
