# project/projectipaccesslist/TestMigProjectIPAccessList_settingIPAddress Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:34](#error-2025-09-01t0034530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 21 seconds
- 2025-08-07 PASS 55 seconds
- 2025-08-08 PASS 2 minutes
- 2025-08-09 PASS 18 seconds
- 2025-08-10 PASS 18 seconds
- 2025-08-11 PASS 2 minutes
- 2025-08-12
  - PASS 20 seconds
  - PASS 2 minutes
- 2025-08-13 PASS 16 seconds
- 2025-08-14 PASS 18 seconds
- 2025-08-15 PASS 2 minutes
- 2025-08-16 PASS 17 seconds
- 2025-08-17 PASS 18 seconds
- 2025-08-18 PASS 17 seconds
- 2025-08-19 PASS 20 seconds
- 2025-08-20
  - PASS 18 seconds
  - PASS 21 seconds
- 2025-08-21 PASS 19 seconds
- 2025-08-22 PASS 17 seconds
- 2025-08-23 PASS 17 seconds
- 2025-08-24 PASS 2 minutes
- 2025-08-25 PASS 18 seconds
- 2025-08-26 PASS 20 seconds
- 2025-08-27 PASS 19 seconds
- 2025-08-28 PASS 19 seconds
- 2025-08-29 PASS 2 minutes
- 2025-08-30 PASS 18 seconds
- 2025-08-31 PASS 2 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:34:53+00:00
```
2025-09-01T00:34:53.2772744Z === RUN   TestMigProjectIPAccessList_settingIPAddress
2025-09-01T00:34:53.2773426Z     resource_project_ip_access_list_migration_test.go:15: Creating execution project: test-acc-tf-p-6018540205359465621
2025-09-01T00:34:53.2774048Z     resource_project_ip_access_list_migration_test.go:15: 
2025-09-01T00:34:53.2774998Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:34:53.2776713Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:34:53.2778863Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_migration_test.go:15
2025-09-01T00:34:53.2779776Z         	Error:      	Received unexpected error:
2025-09-01T00:34:53.2783564Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:34:53.2784880Z         	Test:       	TestMigProjectIPAccessList_settingIPAddress
2025-09-01T00:34:53.2787233Z         	Messages:   	Project creation failed: test-acc-tf-p-6018540205359465621, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:34:53.2788670Z --- FAIL: TestMigProjectIPAccessList_settingIPAddress (0.23s)
```

  - PASS 20 seconds
  - PASS 20 seconds
  - PASS 21 seconds
  - PASS 18 seconds
  - PASS 18 seconds
  - PASS 19 seconds
  - PASS 17 seconds
- 2025-09-02 PASS 21 seconds
- 2025-09-03 PASS 2 minutes
- 2025-09-04 PASS 17 seconds