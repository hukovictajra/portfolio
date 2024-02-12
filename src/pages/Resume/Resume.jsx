import React from "react";
import Loader from "@icons/loader.svg";
import { useState, useEffect } from "react";
import Icon from "../../elements/Icon/Icon";
import PaginationArrowRounded from "@icons/arrow-rounded.svg";
import resumeFile from "@files/pdf/resume.pdf";
import DownloadIcon from "@icons/download.svg";
import "react-pdf/dist/esm/Page/TextLayer.css";
import Toggle from "../../elements/Toggle/Toggle";
import { Document, Page, pdfjs } from "react-pdf";
import PaginationArrow from "@icons/pagination-arrow.svg";
import ItemArrowIcon from "@icons/arrow.svg";

import "./Resume.scss";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function Resume() {
	const [totalPages, setTotalPages] = useState(0);
	const [pageNumber, setPageNumber] = useState(1);
	const [showIframe, setShowIframe] = useState(false);
	const [scale, setScale] = useState(getScale(document.documentElement.clientWidth));
	const [viewWidth, setViewWidth] = useState(document.documentElement.clientWidth);

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
			setViewWidth(document.documentElement.clientWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [document.documentElement.clientWidth]);

	return (
		<div id="resume">
			<div className="resume-go-back-button" onClick={() => window.history.back()}>
				<Icon src={ItemArrowIcon} className="resume-go-back-button-icon" />
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
							<Icon src={PaginationArrow} />
						</span>
						Page {pageNumber} of {totalPages}
						<span
							className={`navigation-icon-md navigation-icon-next ${
								pageNumber >= totalPages && "resume-navigation-disabled"
							}`}
							onClick={goToNextPage}
						>
							<Icon src={PaginationArrow} />
						</span>
					</span>

					<span
						className={`resume-navigation-download ${showIframe && "resume-navigation-disabled"}`}
						onClick={downloadPDF}
					>
						Download
						<Icon src={DownloadIcon} className="resume-navigation-download-icon" />
					</span>
				</div>

				{showIframe ? (
					<iframe className="resume-iframe" src={resumeFile} />
				) : (
					<div className="resume-pdf-document-wrapper">
						<Document
							id="resume-document"
							file={resumeFile}
							className="resume-pdf-document"
							onLoadSuccess={onDocumentLoadSuccess}
							onLoadError={onDocumentLoadError}
							loading={
								<div className="resume-pdf-loader">
									<Icon src={Loader} />
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
								<Icon src={PaginationArrowRounded} />
							</div>

							<div
								onClick={goToNextPage}
								disabled={pageNumber >= totalPages}
								className={`resume-page-button resume-next-page ${
									pageNumber >= totalPages && "resume-navigation-disabled"
								}`}
							>
								<Icon src={PaginationArrowRounded} />
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
