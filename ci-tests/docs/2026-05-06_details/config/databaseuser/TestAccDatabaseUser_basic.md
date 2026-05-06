# config/databaseuser/TestAccDatabaseUser_basic Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 2)
Success rate: 94.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:43](#error-2026-04-09t0043440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.04s
[2026-04-11 00:48](#error-2026-04-11t0048250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 8 seconds
- 2026-04-08 PASS 24 seconds
- 2026-04-09

### Error 2026-04-09T00:43:44+00:00
```
2026-04-09T00:43:44.7661827Z === RUN   TestAccDatabaseUser_basic
2026-04-09T00:43:44.7662860Z     resource_database_user_test.go:44: Creating execution project (1): test-acc-tf-p-4312967158260598643
2026-04-09T00:43:44.7663791Z     resource_database_user_test.go:44: 
2026-04-09T00:43:44.7665393Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:43:44.7668558Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T00:43:44.7671662Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T00:43:44.7674924Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:44
2026-04-09T00:43:44.7676293Z         	Error:      	Received unexpected error:
2026-04-09T00:43:44.7679644Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:43:44.7681240Z         	Test:       	TestAccDatabaseUser_basic
2026-04-09T00:43:44.7684045Z         	Messages:   	Project creation failed: test-acc-tf-p-4312967158260598643, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:43:44.7686193Z --- FAIL: TestAccDatabaseUser_basic (63.42s)
```

- 2026-04-10 PASS 18 seconds
- 2026-04-11

### Error 2026-04-11T00:48:25+00:00
```
2026-04-11T00:48:25.0614421Z === RUN   TestAccDatabaseUser_basic
2026-04-11T00:48:25.0615759Z     resource_database_user_test.go:44: Creating execution project (1): test-acc-tf-p-7534136565074300396
2026-04-11T00:48:25.0616719Z     resource_database_user_test.go:44: 
2026-04-11T00:48:25.0632895Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:48:25.0635918Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:48:25.0639154Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T00:48:25.0642441Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:44
2026-04-11T00:48:25.0643819Z         	Error:      	Received unexpected error:
2026-04-11T00:48:25.0646974Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:48:25.0648733Z         	Test:       	TestAccDatabaseUser_basic
2026-04-11T00:48:25.0651630Z         	Messages:   	Project creation failed: test-acc-tf-p-7534136565074300396, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:48:25.0653616Z --- FAIL: TestAccDatabaseUser_basic (70.20s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 24 seconds
- 2026-04-14 PASS 8 seconds
- 2026-04-15 PASS 17 seconds
- 2026-04-16 PASS 8 seconds
- 2026-04-17 PASS 15 seconds
- 2026-04-18 PASS 7 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 16 seconds
- 2026-04-21 PASS 9 seconds
- 2026-04-22 PASS 22 seconds
- 2026-04-23 PASS 10 seconds
- 2026-04-24 PASS 15 seconds
- 2026-04-25 PASS 8 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 25 seconds
- 2026-04-28 PASS 8 seconds
- 2026-04-29 PASS 18 seconds
- 2026-04-30 PASS a minute
- 2026-05-01 PASS 24 seconds
- 2026-05-02 PASS 11 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 23 seconds
- 2026-05-05 PASS 57 seconds
- 2026-05-06 PASS 14 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 16 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 22 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 21 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 15 seconds
  - PASS 25 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 26 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 24 seconds
- 2026-05-04 PASS 25 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 20 seconds
