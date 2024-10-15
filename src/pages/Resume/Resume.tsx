import { usePageInitialization, useScrollReset, useTheme } from "@utils/hooks";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { Document, Page, pdfjs } from "react-pdf";
import resumeFile from "@assets/files/pdf/resume.pdf";
import ContentPage from "@pages/ContentPage/ContentPage";
import { Tabs, TabsList, TabsTrigger } from "@elements/shadcn/ui/tabs";
import { LoaderIcon, PaginationArrowIcon, DownloadIcon, ArrowRoundedIcon } from "@assets/icons";

import "react-pdf/dist/esm/Page/TextLayer.css";

import "./Resume.scss";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function Resume() {
	const [totalPages, setTotalPages] = useState(0);
	const [pageNumber, setPageNumber] = useState(1);
	const [selectedView, setSelectedView] = useState<"page" | "frame">("page");
	const [scale, setScale] = useState(getScale(document.documentElement.clientWidth));

	usePageInitialization();

	function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
		setTotalPages(numPages);
	}

	function onDocumentLoadError() {
		setSelectedView("frame");
	}

	function goToPreviousPage() {
		setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
	}

	function goToNextPage() {
		setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, totalPages));
	}

	function getScale(windowWidth: number) {
		if (windowWidth <= 375) {
			return 0.5;
		} else if (windowWidth <= 425) {
			return 0.6;
		} else if (windowWidth <= 577) {
			return 0.7;
		} else if (windowWidth <= 640) {
			return 0.9;
		} else if (windowWidth <= 768) {
			return 1.0;
		} else {
			return 1.2;
		}
	}

	function downloadPDF() {
		if (selectedView === "page") {
			const anchorElement = document.createElement("a");
			anchorElement.href = resumeFile;
			anchorElement.download = "tajra_hukovic_resume_2024.pdf";
			anchorElement.click();
		}
	}

	useTheme(null);
	useScrollReset();

	useEffect(() => {
		const handleResize = () => {
			setScale(getScale(document.documentElement.clientWidth));
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const config = {
		delta: 10,
		preventScrollOnSwipe: false,
		trackTouch: true,
		trackMouse: false,
		rotationAngle: 0,
		swipeDuration: Infinity,
		touchEventOptions: { passive: true }
	};

	const swipeHandlers = useSwipeable({
		onSwiped: (eventData) => {
			if (eventData.dir === "Left") {
				goToNextPage();
			} else if (eventData.dir === "Right") {
				goToPreviousPage();
			}
		},
		...config
	});

	return (
		<ContentPage>
			<div id="resume">
				<div className="resume-navigation-pagination">
					<div className="flex gap-2 items-center font-medium bg-gray-300 bg-opacity-60 rounded-md">
						<Tabs className="flex space-x-2" defaultValue={selectedView}>
							<TabsList className="xs:h-8">
								<TabsTrigger
									value="page"
									onClick={() => setSelectedView("page")}
									className="data-[state=active]:bg-primary data-[state=active]:text-white xs:text-xs xs:px-1.5 xs:py-0.5"
								>
									Page
								</TabsTrigger>
								<TabsTrigger
									value="frame"
									onClick={() => setSelectedView("frame")}
									className="data-[state=active]:bg-primary data-[state=active]:text-white xs:text-xs xs:px-1.5 xs:py-0.5"
								>
									Frame
								</TabsTrigger>
							</TabsList>
						</Tabs>
					</div>

					<span className={`navigation-md ${selectedView === "frame" && "resume-items-disabled"}`}>
						<span
							className={`navigation-icon-md navigation-icon-previous ${
								pageNumber <= 1 && "resume-items-disabled"
							}  `}
							onClick={goToPreviousPage}
						>
							<PaginationArrowIcon />
						</span>
						Page {pageNumber} of {totalPages}
						<span
							className={`navigation-icon-md navigation-icon-next ${
								pageNumber >= totalPages && "resume-items-disabled"
							}`}
							onClick={goToNextPage}
						>
							<PaginationArrowIcon />
						</span>
					</span>

					<span
						className={`resume-download-button ${
							selectedView === "frame" && "resume-items-disabled"
						}`}
						onClick={downloadPDF}
					>
						Download
						<DownloadIcon className="h-6 w-6" />
					</span>
				</div>

				{selectedView === "frame" ? (
					<iframe className="resume-iframe" title="Tajra Huković Résumé" src={resumeFile} />
				) : (
					<div className="resume-pdf-document-wrapper h-full" {...swipeHandlers}>
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
							<Page
								pageNumber={pageNumber}
								scale={scale}
								className="resume-pdf-page"
								renderAnnotationLayer={false}
							/>
						</Document>

						<div className="resume-navigation">
							<div
								onClick={goToPreviousPage}
								className={`resume-page-button resume-previous-page ${
									pageNumber <= 1 && "resume-navigation-disabled"
								}`}
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

				{selectedView === "frame" && (
					<div className="navigation-xs">
						<div
							onClick={goToPreviousPage}
							className={`navigation-xs-button ${pageNumber <= 1 && "resume-items-disabled"}`}
						>
							<ArrowRoundedIcon />
						</div>

						<div
							onClick={goToNextPage}
							className={`navigation-xs-button rotate-180 ${
								pageNumber >= totalPages && "resume-items-disabled"
							}`}
						>
							<ArrowRoundedIcon />
						</div>
					</div>
				)}
			</div>
		</ContentPage>
	);
}
