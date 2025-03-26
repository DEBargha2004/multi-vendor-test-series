import EditorGroup from "@/components/custom/exam/question/editor/editor-group";
import QuestionEditorSidebar from "@/components/custom/exam/question/editor/sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Page() {
  return (
    <main className="h-full flex items-start @container">
      <ResizablePanelGroup direction="horizontal" className="h-full w-full">
        <ResizablePanel
          defaultSize={20}
          className="@3xl:min-w-[250px] min-w-[200px] max-w-[350px] @xl:block hidden"
        >
          <QuestionEditorSidebar />
        </ResizablePanel>
        <ResizableHandle className="@xl:block hidden" />
        <ResizablePanel defaultSize={80} className="overflow-y-auto h-full">
          <EditorGroup />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
