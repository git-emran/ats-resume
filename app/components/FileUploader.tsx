import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { formatSize } from '../lib/utils'

interface FileUploaderProps {
    onFileSelect?: (file: File | null) => void
}

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {
    const [file, setFile] = useState<File | null>(null)

    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            const newFile = acceptedFiles[0] || null
            setFile(newFile)
            onFileSelect?.(newFile)
        },
        [onFileSelect]
    )

    const maxFileSize = 20 * 1024 * 1024 // 20 MB

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false,
        accept: { 'application/pdf': ['.pdf'] },
        maxSize: maxFileSize,
    })

    const handleRemoveFile = (e: React.MouseEvent) => {
        e.stopPropagation()
        setFile(null)
        onFileSelect?.(null)
    }

    return (
        <div className="w-full gradient-border">
            <div {...getRootProps()} className="p-4 rounded cursor-pointer">
                <input {...getInputProps()} />

                <div className="space-y-4">
                    {file ? (
                        <div
                            className="uploader-selected-file flex items-center space-x-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src="/images/pdf.png" alt="pdf" className="size-10" />
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-700 truncate">{file.name}</p>
                                <p className="text-sm text-gray-500">{formatSize(file.size)}</p>
                            </div>
                            <button onClick={handleRemoveFile} className="p-1 cursor-pointer hover:bg-gray-200 rounded">
                                <img src="/icons/cross.svg" alt="remove" className="w-4 h-4" />
                            </button>
                        </div>
                    ) : (
                        <div className="text-center">
                            <div className="mx-auto mb-2 w-16 h-16 flex items-center justify-center">
                                <img src="/icons/info.svg" alt="upload" className="size-20" />
                            </div>
                            <p className="text-lg text-gray-500">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-sm text-gray-400">PDF only (max {formatSize(maxFileSize)})</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FileUploader
