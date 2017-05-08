import React from 'react';
import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
import DiffMonitor from 'redux-devtools-diff-monitor';
import SliderMonitor from 'redux-slider-monitor';
import ImportExportMonitor from 'redux-import-export-monitor';

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changeMonitorKey="ctrl-c"
    changePositionKey="ctrl-m"
    defaultIsVisible={false}
  >
    <LogMonitor />
    <DiffMonitor />
    <SliderMonitor />
  </DockMonitor>
);

export const ImportExportTool = createDevTools(
  <ImportExportMonitor openModalKey="ctrl-e" />
);
