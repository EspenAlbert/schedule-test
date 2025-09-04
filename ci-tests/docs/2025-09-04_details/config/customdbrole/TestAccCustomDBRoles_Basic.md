# config/customdbrole/TestAccCustomDBRoles_Basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:31](#error-2025-09-01t0031130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 17 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 17 seconds
- 2025-08-09 PASS 17 seconds
- 2025-08-10 PASS 16 seconds
- 2025-08-11 PASS 20 seconds
- 2025-08-12 PASS 16 seconds
- 2025-08-13 PASS 15 seconds
- 2025-08-14 PASS 16 seconds
- 2025-08-15 PASS 17 seconds
- 2025-08-16 PASS 16 seconds
- 2025-08-17 PASS 18 seconds
- 2025-08-18 PASS 17 seconds
- 2025-08-19 PASS 19 seconds
- 2025-08-20
  - PASS 17 seconds
  - PASS 18 seconds
- 2025-08-21 PASS 17 seconds
- 2025-08-22 PASS 16 seconds
- 2025-08-23 PASS 18 seconds
- 2025-08-24 PASS 15 seconds
- 2025-08-25 PASS 19 seconds
- 2025-08-26 PASS 16 seconds
- 2025-08-27 PASS 16 seconds
- 2025-08-28 PASS 16 seconds
- 2025-08-29 PASS 19 seconds
- 2025-08-30 PASS 17 seconds
- 2025-08-31 PASS 19 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:31:13+00:00
```
2025-09-01T00:31:13.1329204Z === RUN   TestAccCustomDBRoles_Basic
2025-09-01T00:31:13.1330275Z     resource_custom_db_role_test.go:38: Creating execution project: test-acc-tf-p-9199306799771772523
2025-09-01T00:31:13.1331110Z     resource_custom_db_role_test.go:38: 
2025-09-01T00:31:13.1332640Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:31:13.1335602Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:31:13.1338925Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_custom_db_role_test.go:44
2025-09-01T00:31:13.1372767Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_custom_db_role_test.go:38
2025-09-01T00:31:13.1374149Z         	Error:      	Received unexpected error:
2025-09-01T00:31:13.1378748Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:13.1381052Z         	Test:       	TestAccCustomDBRoles_Basic
2025-09-01T00:31:13.1384759Z         	Messages:   	Project creation failed: test-acc-tf-p-9199306799771772523, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:13.1387073Z --- FAIL: TestAccCustomDBRoles_Basic (0.16s)
```

  - PASS 15 seconds
  - PASS 19 seconds
  - PASS 19 seconds
  - PASS 16 seconds
  - PASS 16 seconds
  - PASS 17 seconds
  - PASS 17 seconds
- 2025-09-02 PASS 16 seconds
- 2025-09-03 PASS 16 seconds
- 2025-09-04 PASS 17 seconds