# encryption/encryptionatrest/TestAccEncryptionAtRest_basicAzure Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 112) FAIL
Success rate: 99.12%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030020000) |  | qa | 0.01s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 5 seconds
- 2025-04-13 PASS 4 seconds
- 2025-04-14 PASS 6 seconds
- 2025-04-15 PASS 6 seconds
- 2025-04-16
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-04-17 PASS 4 seconds
- 2025-04-18 PASS 8 seconds
- 2025-04-19 PASS 4 seconds
- 2025-04-20 PASS 7 seconds
- 2025-04-21 PASS 4 seconds
- 2025-04-22 PASS 5 seconds
- 2025-04-23 PASS 4 seconds
- 2025-04-24 PASS 7 seconds
- 2025-04-25 PASS 4 seconds
- 2025-04-26 PASS 7 seconds
- 2025-04-27 PASS 5 seconds
- 2025-04-28 PASS 7 seconds
- 2025-04-29 PASS 3 seconds
- 2025-04-30
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-05-01
  - PASS 6 seconds
  - PASS 4 seconds
  - PASS 6 seconds
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 5 seconds
- 2025-05-02 PASS 7 seconds
- 2025-05-03 PASS 6 seconds
- 2025-05-04 PASS 4 seconds
- 2025-05-05 PASS 7 seconds
- 2025-05-06 PASS 4 seconds
- 2025-05-07 PASS 4 seconds
- 2025-05-08 PASS 7 seconds
- 2025-05-09 PASS 4 seconds
- 2025-05-10 PASS 4 seconds
- 2025-05-11

### Error 2025-05-11T00:30:02+00:00
```
2025-05-11T00:30:02.0109040Z === RUN   TestAccEncryptionAtRest_basicAzure
2025-05-11T00:30:02.0109598Z     resource_test.go:82: Creating execution project: test-acc-tf-p-7739909064680151822
2025-05-11T00:30:02.0110071Z     resource_test.go:82: 
2025-05-11T00:30:02.0110983Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:02.0112753Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:02.0114623Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:82
2025-05-11T00:30:02.0115417Z         	Error:      	Received unexpected error:
2025-05-11T00:30:02.0116307Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:02.0116887Z         	Test:       	TestAccEncryptionAtRest_basicAzure
2025-05-11T00:30:02.0118090Z         	Messages:   	Project creation failed: test-acc-tf-p-7739909064680151822, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:02.0118817Z --- FAIL: TestAccEncryptionAtRest_basicAzure (0.08s)
```

- 2025-05-12 PASS 6 seconds
- 2025-05-13
  - PASS 6 seconds
  - PASS 4 seconds
- 2025-05-14 PASS 4 seconds
- 2025-05-15 PASS 5 seconds
- 2025-05-16 PASS 5 seconds
- 2025-05-17 PASS 3 seconds
- 2025-05-18 PASS 4 seconds
- 2025-05-19 PASS 4 seconds
- 2025-05-20 PASS 5 seconds
- 2025-05-21 PASS 8 seconds
- 2025-05-22 PASS 5 seconds
- 2025-05-23 PASS 6 seconds
- 2025-05-24 PASS 5 seconds
- 2025-05-25 PASS 4 seconds
- 2025-05-26 PASS 4 seconds
- 2025-05-27 PASS 6 seconds
- 2025-05-28
  - PASS 5 seconds
  - PASS 4 seconds
- 2025-05-29 PASS 6 seconds
- 2025-05-30 PASS 4 seconds
- 2025-05-31 PASS 6 seconds
- 2025-06-01
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 7 seconds
- 2025-06-02
  - PASS 7 seconds
  - PASS 4 seconds
  - PASS 5 seconds
- 2025-06-03 PASS 5 seconds
- 2025-06-04 PASS 6 seconds
- 2025-06-05 PASS 7 seconds
- 2025-06-06 PASS 5 seconds
- 2025-06-07 PASS 5 seconds
- 2025-06-08 PASS 17 seconds
- 2025-06-09 PASS 7 seconds
- 2025-06-10 PASS 5 seconds
- 2025-06-11
  - PASS 4 seconds
  - PASS 5 seconds
- 2025-06-12 PASS 7 seconds
- 2025-06-13 PASS 6 seconds
- 2025-06-14 PASS 5 seconds
- 2025-06-15 PASS 5 seconds
- 2025-06-16 PASS 5 seconds
- 2025-06-17 PASS 6 seconds
- 2025-06-18 PASS 4 seconds
- 2025-06-19 PASS 7 seconds
- 2025-06-20 PASS 8 seconds
- 2025-06-21 PASS 5 seconds
- 2025-06-22 PASS 14 seconds
- 2025-06-23 PASS 7 seconds
- 2025-06-24 PASS 5 seconds
- 2025-06-25 PASS 5 seconds
- 2025-06-26 PASS 4 seconds
- 2025-06-27 PASS 5 seconds
- 2025-06-28 PASS 7 seconds
- 2025-06-29 PASS 6 seconds
- 2025-06-30 PASS 7 seconds
- 2025-07-01
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 7 seconds
- 2025-07-02 PASS 5 seconds
- 2025-07-03 PASS 4 seconds
- 2025-07-04 PASS 26 seconds
- 2025-07-05 PASS 4 seconds
- 2025-07-06 PASS 4 seconds
- 2025-07-07 PASS 4 seconds
- 2025-07-08 PASS 5 seconds
- 2025-07-09 PASS 6 seconds
- 2025-07-10 PASS 10 seconds