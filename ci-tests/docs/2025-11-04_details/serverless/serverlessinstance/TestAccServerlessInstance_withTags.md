# serverless/serverlessinstance/TestAccServerlessInstance_withTags Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-12 00:28](#error-2025-10-12t0028400000) |  | qa | 1755.00s
[2025-10-27 00:30](#error-2025-10-27t0030310000) |  | dev | 1756.08s

## Timeline
- 2025-10-05: MISSING
- 2025-10-06 PASS 10 minutes
- 2025-10-07 PASS 10 minutes
- 2025-10-08 PASS 11 minutes
- 2025-10-09 PASS 13 minutes
- 2025-10-10 PASS 10 minutes
- 2025-10-11 PASS 10 minutes
- 2025-10-12

### Error 2025-10-12T00:28:40+00:00
```
2025-10-12T00:28:40.8040227Z === RUN   TestAccServerlessInstance_withTags
2025-10-12T00:28:40.8044102Z === CONT  TestAccServerlessInstance_withTags
2025-10-12T00:57:55.8336670Z === NAME  TestAccServerlessInstance_withTags
2025-10-12T00:57:55.8339346Z     resource_serverless_instance_test.go:30: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-12T00:57:55.8339899Z         
2025-10-12T00:57:55.8340555Z         Error: error deleting MongoDB Serverless Instance (test-acc-tf-c-6259589918792999676): context deadline exceeded
2025-10-12T00:57:55.8341056Z         
2025-10-12T00:57:55.8341327Z --- FAIL: TestAccServerlessInstance_withTags (1755.03s)
```

- 2025-10-13 PASS 12 minutes
- 2025-10-14 PASS 10 minutes
- 2025-10-15 PASS 10 minutes
- 2025-10-16 PASS 16 minutes
- 2025-10-17 PASS 12 minutes
- 2025-10-18 PASS 10 minutes
- 2025-10-19 PASS 10 minutes
- 2025-10-20
  - PASS 12 minutes
  - PASS 10 minutes
- 2025-10-21 PASS 10 minutes
- 2025-10-22
  - PASS 10 minutes
  - PASS 10 minutes
- 2025-10-23 PASS 10 minutes
- 2025-10-24 PASS 11 minutes
- 2025-10-25 PASS 10 minutes
- 2025-10-26 PASS 10 minutes
- 2025-10-27

### Error 2025-10-27T00:30:31+00:00
```
2025-10-27T00:30:31.9644763Z === RUN   TestAccServerlessInstance_withTags
2025-10-27T00:30:31.9649541Z === CONT  TestAccServerlessInstance_withTags
2025-10-27T00:59:48.7182983Z === NAME  TestAccServerlessInstance_withTags
2025-10-27T00:59:48.7185326Z     resource_serverless_instance_test.go:30: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-27T00:59:48.7185917Z         
2025-10-27T00:59:48.7186553Z         Error: error deleting MongoDB Serverless Instance (test-acc-tf-c-820728336342560112): context deadline exceeded
2025-10-27T00:59:48.7187042Z         
2025-10-27T00:59:48.7187305Z --- FAIL: TestAccServerlessInstance_withTags (1756.75s)
```

- 2025-10-28 PASS 10 minutes
- 2025-10-29 PASS 12 minutes
- 2025-10-30 PASS 10 minutes
- 2025-10-31 PASS 10 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 10 minutes
- 2025-11-03 PASS 10 minutes
- 2025-11-04 PASS 10 minutes