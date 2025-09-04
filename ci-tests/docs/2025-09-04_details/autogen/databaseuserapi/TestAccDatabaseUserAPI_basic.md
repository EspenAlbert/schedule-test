# autogen/databaseuserapi/TestAccDatabaseUserAPI_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:32](#error-2025-09-01t0032130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 8 seconds
- 2025-08-07 PASS 43 seconds
- 2025-08-08 PASS 8 seconds
- 2025-08-09 PASS 7 seconds
- 2025-08-10 PASS 7 seconds
- 2025-08-11 PASS 9 seconds
- 2025-08-12 PASS 7 seconds
- 2025-08-13 PASS 11 seconds
- 2025-08-14 PASS 7 seconds
- 2025-08-15 PASS 6 seconds
- 2025-08-16 PASS 10 seconds
- 2025-08-17 PASS 8 seconds
- 2025-08-18 PASS 8 seconds
- 2025-08-19 PASS 9 seconds
- 2025-08-20
  - PASS 8 seconds
  - PASS 10 seconds
- 2025-08-21 PASS 7 seconds
- 2025-08-22 PASS 8 seconds
- 2025-08-23 PASS 8 seconds
- 2025-08-24 PASS 6 seconds
- 2025-08-25 PASS 9 seconds
- 2025-08-26 PASS 10 seconds
- 2025-08-27 PASS 10 seconds
- 2025-08-28 PASS 7 seconds
- 2025-08-29 PASS 6 seconds
- 2025-08-30 PASS 8 seconds
- 2025-08-31 PASS 6 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:32:13+00:00
```
2025-09-01T00:32:13.2867209Z === RUN   TestAccDatabaseUserAPI_basic
2025-09-01T00:32:13.2868097Z     resource_test.go:17: Creating execution project: test-acc-tf-p-3306042198601250401
2025-09-01T00:32:13.2868857Z     resource_test.go:17: 
2025-09-01T00:32:13.2870340Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:32:13.2878549Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:32:13.2881971Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/databaseuserapi/resource_test.go:17
2025-09-01T00:32:13.2883308Z         	Error:      	Received unexpected error:
2025-09-01T00:32:13.2887996Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:32:13.2890152Z         	Test:       	TestAccDatabaseUserAPI_basic
2025-09-01T00:32:13.2894110Z         	Messages:   	Project creation failed: test-acc-tf-p-3306042198601250401, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:32:13.2896791Z --- FAIL: TestAccDatabaseUserAPI_basic (0.15s)
```

  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-09-02 PASS 8 seconds
- 2025-09-03 PASS 8 seconds
- 2025-09-04 PASS 8 seconds