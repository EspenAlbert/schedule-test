# config/databaseuser/TestAccDatabaseUser_withLabelsAndDescription Test Details
# Found 102 TestRuns in dev, qa from 2025-04-24 to 2025-07-10 from master branch: 1 unique tests, PASS(x 101) FAIL
Success rate: 99.02%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029530000) |  | qa | 0.00s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12: MISSING
- 2025-04-13: MISSING
- 2025-04-14: MISSING
- 2025-04-15: MISSING
- 2025-04-16: MISSING
- 2025-04-17: MISSING
- 2025-04-18: MISSING
- 2025-04-19: MISSING
- 2025-04-20: MISSING
- 2025-04-21: MISSING
- 2025-04-22: MISSING
- 2025-04-23: MISSING
- 2025-04-24 PASS 23 seconds
- 2025-04-25 PASS 23 seconds
- 2025-04-26 PASS 23 seconds
- 2025-04-27 PASS 24 seconds
- 2025-04-28 PASS 24 seconds
- 2025-04-29 PASS 23 seconds
- 2025-04-30
  - PASS 24 seconds
  - PASS 24 seconds
- 2025-05-01
  - PASS 23 seconds
  - PASS 24 seconds
  - PASS 22 seconds
  - PASS 23 seconds
  - PASS 29 seconds
  - PASS 24 seconds
  - PASS 34 seconds
- 2025-05-02 PASS 23 seconds
- 2025-05-03 PASS 23 seconds
- 2025-05-04 PASS 23 seconds
- 2025-05-05 PASS 24 seconds
- 2025-05-06 PASS 23 seconds
- 2025-05-07 PASS 23 seconds
- 2025-05-08 PASS 24 seconds
- 2025-05-09 PASS 24 seconds
- 2025-05-10 PASS 23 seconds
- 2025-05-11

### Error 2025-05-11T00:29:53+00:00
```
2025-05-11T00:29:53.0026063Z === RUN   TestAccDatabaseUser_withLabelsAndDescription
2025-05-11T00:29:53.0027184Z     resource_database_user_test.go:186: Creating execution project: test-acc-tf-p-6662958129607644602
2025-05-11T00:29:53.0028123Z     resource_database_user_test.go:186: 
2025-05-11T00:29:53.0030017Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:53.0033655Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:53.0037393Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:186
2025-05-11T00:29:53.0038857Z         	Error:      	Received unexpected error:
2025-05-11T00:29:53.0040505Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:53.0041887Z         	Test:       	TestAccDatabaseUser_withLabelsAndDescription
2025-05-11T00:29:53.0043834Z         	Messages:   	Project creation failed: test-acc-tf-p-6662958129607644602, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:53.0045158Z --- FAIL: TestAccDatabaseUser_withLabelsAndDescription (0.01s)
```

- 2025-05-12 PASS 23 seconds
- 2025-05-13
  - PASS 24 seconds
  - PASS 24 seconds
- 2025-05-14 PASS 22 seconds
- 2025-05-15 PASS 24 seconds
- 2025-05-16 PASS 23 seconds
- 2025-05-17 PASS 21 seconds
- 2025-05-18 PASS 22 seconds
- 2025-05-19 PASS 22 seconds
- 2025-05-20 PASS 22 seconds
- 2025-05-21 PASS 23 seconds
- 2025-05-22 PASS 22 seconds
- 2025-05-23 PASS 23 seconds
- 2025-05-24 PASS 23 seconds
- 2025-05-25 PASS 22 seconds
- 2025-05-26 PASS 22 seconds
- 2025-05-27 PASS 23 seconds
- 2025-05-28
  - PASS 23 seconds
  - PASS 23 seconds
  - PASS 22 seconds
- 2025-05-29 PASS 23 seconds
- 2025-05-30 PASS 24 seconds
- 2025-05-31 PASS 23 seconds
- 2025-06-01
  - PASS 21 seconds
  - PASS 23 seconds
  - PASS 23 seconds
  - PASS 23 seconds
  - PASS 24 seconds
  - PASS 22 seconds
- 2025-06-02
  - PASS 22 seconds
  - PASS 28 seconds
  - PASS 31 seconds
- 2025-06-03 PASS 23 seconds
- 2025-06-04 PASS 23 seconds
- 2025-06-05 PASS 34 seconds
- 2025-06-06 PASS 23 seconds
- 2025-06-07 PASS 23 seconds
- 2025-06-08 PASS 22 seconds
- 2025-06-09 PASS 23 seconds
- 2025-06-10 PASS 23 seconds
- 2025-06-11
  - PASS 23 seconds
  - PASS 23 seconds
- 2025-06-12 PASS 23 seconds
- 2025-06-13 PASS 23 seconds
- 2025-06-14 PASS 23 seconds
- 2025-06-15 PASS 23 seconds
- 2025-06-16 PASS 23 seconds
- 2025-06-17 PASS 24 seconds
- 2025-06-18
  - PASS 24 seconds
  - PASS 23 seconds
- 2025-06-19 PASS 22 seconds
- 2025-06-20 PASS 24 seconds
- 2025-06-21 PASS 27 seconds
- 2025-06-22 PASS 21 seconds
- 2025-06-23 PASS 23 seconds
- 2025-06-24 PASS 23 seconds
- 2025-06-25 PASS 23 seconds
- 2025-06-26 PASS 23 seconds
- 2025-06-27 PASS 24 seconds
- 2025-06-28 PASS 21 seconds
- 2025-06-29 PASS 23 seconds
- 2025-06-30 PASS 23 seconds
- 2025-07-01
  - PASS 22 seconds
  - PASS 23 seconds
  - PASS 24 seconds
  - PASS 23 seconds
  - PASS 25 seconds
  - PASS 29 seconds
- 2025-07-02 PASS 23 seconds
- 2025-07-03 PASS 23 seconds
- 2025-07-04 PASS 23 seconds
- 2025-07-05 PASS 23 seconds
- 2025-07-06 PASS 19 seconds
- 2025-07-07 PASS 22 seconds
- 2025-07-08 PASS 24 seconds
- 2025-07-09 PASS 24 seconds
- 2025-07-10 PASS 23 seconds