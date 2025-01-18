export const randomData = (data: any [], limit = 5) => {
    return data.sort(() => Math.random() - 0.5).slice(0, limit)   
}