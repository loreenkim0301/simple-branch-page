figma.showUI(__html__); // UI 표시

figma.ui.onmessage = async (msg) => {
  if (msg.action === "duplicatePage") {
    try {
      const currentPage = figma.currentPage;
      if (!currentPage) {
        throw new Error("현재 선택된 페이지가 없습니다.");
      }

      const duplicatedPage = currentPage.clone();
      duplicatedPage.name = `${currentPage.name} - Copy`;

      figma.notify(`페이지 복제 성공: ${duplicatedPage.name}`);
    } catch (error) {
      figma.notify(`에러 발생: ${error.message}`);
      console.error("Error during page duplication:", error);
    } finally {
      figma.closePlugin();
    }
  } else {
    figma.notify("알 수 없는 액션 요청입니다.");
    console.warn("Unknown action received:", msg);
  }
};
