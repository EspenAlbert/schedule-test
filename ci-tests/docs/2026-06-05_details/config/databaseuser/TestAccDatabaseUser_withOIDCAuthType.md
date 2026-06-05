# config/databaseuser/TestAccDatabaseUser_withOIDCAuthType Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-28 01:02](#error-2026-05-28t0102570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.01s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 8 seconds
  - PASS 8 seconds
- 2026-05-08 PASS 24 seconds
- 2026-05-09 PASS 13 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 21 seconds
- 2026-05-12 PASS 10 seconds
- 2026-05-13 PASS 17 seconds
- 2026-05-14 PASS 8 seconds
- 2026-05-15 PASS 17 seconds
- 2026-05-16 PASS 7 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 17 seconds
- 2026-05-19 PASS 15 seconds
- 2026-05-20 PASS 20 seconds
- 2026-05-21 PASS 8 seconds
- 2026-05-22 PASS 17 seconds
- 2026-05-23 PASS 6 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 16 seconds
- 2026-05-26 PASS 8 seconds
- 2026-05-27 PASS 26 seconds
- 2026-05-28

### Error 2026-05-28T01:02:57+00:00
```
2026-05-28T01:02:57.6228661Z === RUN   TestAccDatabaseUser_withOIDCAuthType
2026-05-28T01:02:57.6229285Z     resource_database_user_test.go:448: Creating execution project (1): test-acc-tf-p-8530317293685649369
2026-05-28T01:02:57.6229841Z     resource_database_user_test.go:448: 
2026-05-28T01:02:57.6230760Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:02:57.6232646Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:02:57.6234432Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:02:57.6236547Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:448
2026-05-28T01:02:57.6237394Z         	Error:      	Received unexpected error:
2026-05-28T01:02:57.6239306Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:02:57.6240339Z         	Test:       	TestAccDatabaseUser_withOIDCAuthType
2026-05-28T01:02:57.6242200Z         	Messages:   	Project creation failed: test-acc-tf-p-8530317293685649369, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:02:57.6243958Z --- FAIL: TestAccDatabaseUser_withOIDCAuthType (83.13s)
```

- 2026-05-29 PASS 24 seconds
- 2026-05-30 PASS 10 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 18 seconds
- 2026-06-02 PASS 16 seconds
- 2026-06-03 PASS 26 seconds
- 2026-06-04 PASS 9 seconds
- 2026-06-05 PASS 11 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 23 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 24 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 26 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 25 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
