import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bgcContainer};
  width: 250px;
  flex-direction: column;
  margin-right: 1px;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.verticalPadding || '20px'};
  user-select: none;
  &:last-of-type {
    margin: 0;
  }
`
export const Title = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.title};
  margin-bottom: 5px;
  margin-top: 10px;
`
export const Specification = styled.div`
  display: flex;
  color: ${({ theme }) => theme.specificText};
  margin-bottom: 20px;
  font-size: 14px;
`
export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  flex: 0 0 auto;
  background-color: #e54722;
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 100px;
`
export const DownloadsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 0px 0px rgba(177,177,178,1);
  margin-bottom: 20px;
  i {
    font-size: 24px;
    &:last-of-type {
    margin-right: 5px;
  }
`
export const TitleDownloads = styled.div`
  display: flex;
  color: ${({ theme }) => theme.titleDownloadingText};
  font-size: 14px;
`
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: ${({ theme }) => theme.iconContColor};
  margin-bottom: 10px;
  }
`
export const Number = styled.div`
  display: flex;
  font-size: 24px;
`
export const Button = styled.button`
  display: flex;
  background-color: #e54722;
  border: 0;
  outline: none;
  border-radius: 4px;
  padding: 5px 10px;
  color: #fff;
  font-size: 18px;
  margin-bottom: 10px;
  cursor: pointer;
`
export const PriceTable = styled.div`
  display: flex;
  align-items: center;
`
