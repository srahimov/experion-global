import { describe, it, expect, vi, beforeEach, afterEach, type MockInstance } from 'vitest';
import { logger } from '../../utils/logger';

describe('Logger', () => {
  // MockInstance from vitest — no generics needed, avoids all type constraint errors
  let consoleSpy: MockInstance;

  beforeEach(() => {
    consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should call console.log when logger.info is invoked', () => {
    logger.info('Info message');
    expect(consoleSpy).toHaveBeenCalledOnce();
  });

  it('should call console.log when logger.warn is invoked', () => {
    logger.warn('Warn message');
    expect(consoleSpy).toHaveBeenCalledOnce();
  });

  it('should call console.log when logger.error is invoked', () => {
    logger.error('Error message');
    expect(consoleSpy).toHaveBeenCalledOnce();
  });

  it('should call console.log when logger.debug is invoked', () => {
    logger.debug('Debug message');
    expect(consoleSpy).toHaveBeenCalledOnce();
  });

  it('should call console.log when logger.success is invoked', () => {
    logger.success('Success message');
    expect(consoleSpy).toHaveBeenCalledOnce();
  });

  it('should include the message text in the output', () => {
    logger.info('my-unique-message');
    const call = consoleSpy.mock.calls[0] as string[];
    const output = call.join(' ');
    expect(output).toContain('my-unique-message');
  });

  it('should include INFO level tag in output', () => {
    logger.info('test');
    const output = (consoleSpy.mock.calls[0] as string[]).join(' ');
    expect(output).toContain('INFO');
  });

  it('should include ERROR level tag in output', () => {
    logger.error('test');
    const output = (consoleSpy.mock.calls[0] as string[]).join(' ');
    expect(output).toContain('ERROR');
  });

  it('should log additional data when provided', () => {
    const data = { key: 'value' };
    logger.info('with data', data);
    expect(consoleSpy).toHaveBeenCalledWith(expect.any(String), data);
  });

  it('should not throw when called with undefined data', () => {
    expect(() => logger.info('no data')).not.toThrow();
  });
});