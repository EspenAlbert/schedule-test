# config/databaseuser/TestMigConfigRSDatabaseUser_Basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 05:59](#error-2025-09-01t0559570000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 22 seconds
- 2025-08-07 PASS 23 seconds
- 2025-08-08 PASS 23 seconds
- 2025-08-09 PASS 23 seconds
- 2025-08-10 PASS 22 seconds
- 2025-08-11 PASS 22 seconds
- 2025-08-12 PASS 23 seconds
- 2025-08-13 PASS 23 seconds
- 2025-08-14 PASS 22 seconds
- 2025-08-15 PASS 22 seconds
- 2025-08-16 PASS 22 seconds
- 2025-08-17 PASS 21 seconds
- 2025-08-18 PASS 22 seconds
- 2025-08-19 PASS 22 seconds
- 2025-08-20
  - PASS 23 seconds
  - PASS 21 seconds
- 2025-08-21 PASS 23 seconds
- 2025-08-22 PASS 22 seconds
- 2025-08-23 PASS 22 seconds
- 2025-08-24 PASS 20 seconds
- 2025-08-25 PASS 22 seconds
- 2025-08-26 PASS 28 seconds
- 2025-08-27 PASS 26 seconds
- 2025-08-28 PASS 21 seconds
- 2025-08-29 PASS 25 seconds
- 2025-08-30 PASS 24 seconds
- 2025-08-31 PASS 21 seconds
- 2025-09-01
  - PASS 20 seconds
  - FAIL a moment

### Error 2025-09-01T05:59:57+00:00
```
2025-09-01T05:59:57.8474862Z === RUN   TestMigConfigRSDatabaseUser_Basic
2025-09-01T05:59:57.8475841Z     resource_database_user_migration_test.go:16: Creating execution project: test-acc-tf-p-1734166644993504380
2025-09-01T05:59:57.8476726Z     resource_database_user_migration_test.go:16: 
2025-09-01T05:59:57.8478334Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T05:59:57.8481126Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T05:59:57.8484402Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_migration_test.go:16
2025-09-01T05:59:57.8485697Z         	Error:      	Received unexpected error:
2025-09-01T05:59:57.8490241Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:59:57.8492265Z         	Test:       	TestMigConfigRSDatabaseUser_Basic
2025-09-01T05:59:57.8495853Z         	Messages:   	Project creation failed: test-acc-tf-p-1734166644993504380, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:59:57.8498367Z --- FAIL: TestMigConfigRSDatabaseUser_Basic (0.06s)
```

  - PASS 26 seconds
  - PASS 23 seconds
  - PASS 23 seconds
  - PASS 23 seconds
  - PASS 31 seconds
  - PASS 24 seconds
- 2025-09-02 PASS 23 seconds
- 2025-09-03 PASS 21 seconds
- 2025-09-04 PASS 23 seconds