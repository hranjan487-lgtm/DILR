export interface ClassRecordingFolder {
  label: string
  description: string
  url: string
}

export const classRecordingFolders: ClassRecordingFolder[] = [
  {
    label: 'DILR 2025 Sessions',
    description: 'Weekly class recordings from 2025, named by session date.',
    url: 'https://drive.google.com/drive/folders/1UdxYr1TWfmC8JCDeeWpYG-86PakovzUS',
  },
  {
    label: 'DILR Sessions (2024 and earlier)',
    description: 'Earlier class recordings, named by session date.',
    url: 'https://drive.google.com/drive/folders/1kfUuA2bqlanFQMsls0fAZbb3MaiYcNlu',
  },
]
