# config/customdbrole/TestMigConfigCustomDBRoles_Basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:31](#error-2025-09-01t0031130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.04s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 20 seconds
- 2025-08-07 PASS 57 seconds
- 2025-08-08 PASS 21 seconds
- 2025-08-09 PASS 20 seconds
- 2025-08-10 PASS 19 seconds
- 2025-08-11 PASS 24 seconds
- 2025-08-12 PASS 20 seconds
- 2025-08-13 PASS 21 seconds
- 2025-08-14 PASS 20 seconds
- 2025-08-15 PASS 23 seconds
- 2025-08-16 PASS 20 seconds
- 2025-08-17 PASS 21 seconds
- 2025-08-18 PASS 19 seconds
- 2025-08-19 PASS 21 seconds
- 2025-08-20
  - PASS 21 seconds
  - PASS 20 seconds
- 2025-08-21 PASS 20 seconds
- 2025-08-22 PASS 19 seconds
- 2025-08-23 PASS 22 seconds
- 2025-08-24 PASS 17 seconds
- 2025-08-25 PASS 20 seconds
- 2025-08-26 PASS 19 seconds
- 2025-08-27 PASS 23 seconds
- 2025-08-28 PASS 20 seconds
- 2025-08-29 PASS 21 seconds
- 2025-08-30 PASS 20 seconds
- 2025-08-31 PASS 21 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:31:13+00:00
```
2025-09-01T00:31:13.1270556Z === RUN   TestMigConfigCustomDBRoles_Basic
2025-09-01T00:31:13.1271603Z     resource_custom_db_role_migration_test.go:10: Creating execution project: test-acc-tf-p-3188444431127377122
2025-09-01T00:31:13.1272554Z     resource_custom_db_role_migration_test.go:10: 
2025-09-01T00:31:13.1274135Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:31:13.1277070Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:31:13.1310597Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_custom_db_role_test.go:44
2025-09-01T00:31:13.1314241Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/customdbrole/resource_custom_db_role_migration_test.go:10
2025-09-01T00:31:13.1315674Z         	Error:      	Received unexpected error:
2025-09-01T00:31:13.1320365Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:13.1322454Z         	Test:       	TestMigConfigCustomDBRoles_Basic
2025-09-01T00:31:13.1326348Z         	Messages:   	Project creation failed: test-acc-tf-p-3188444431127377122, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:13.1328663Z --- FAIL: TestMigConfigCustomDBRoles_Basic (0.37s)
```

  - PASS 20 seconds
  - PASS 21 seconds
  - PASS 20 seconds
  - PASS 21 seconds
  - PASS 19 seconds
  - PASS 21 seconds
  - PASS 21 seconds
- 2025-09-02 PASS 20 seconds
- 2025-09-03 PASS 20 seconds
- 2025-09-04 PASS 21 seconds