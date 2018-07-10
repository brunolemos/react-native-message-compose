declare module 'react-native-message-compose' {
  interface RNMessageComposeData {
    attachments: Record<string, string>[]
    body: string
    recipients: string[]
    subject: string
  }

  const RNMessageCompose: {
    /**
     * @platform ios
     */
    canSendAttachments: () => boolean

    /**
     * @platform ios
     */
    canSendSubject: () => boolean

    /**
     * @platform ios
     */
    canSendText: () => boolean

    name: 'RNMessageCompose'
    send: (data: RNMessageComposeData) => Promise<void>
  }

  export default RNMessageCompose
}
