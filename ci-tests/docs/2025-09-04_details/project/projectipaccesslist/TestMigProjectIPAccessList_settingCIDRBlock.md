# project/projectipaccesslist/TestMigProjectIPAccessList_settingCIDRBlock Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:34](#error-2025-09-01t0034530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 18 seconds
- 2025-08-07 PASS 53 seconds
- 2025-08-08 PASS 15 seconds
- 2025-08-09 PASS 15 seconds
- 2025-08-10 PASS 2 minutes
- 2025-08-11 PASS 18 seconds
- 2025-08-12
  - PASS 18 seconds
  - PASS 15 seconds
- 2025-08-13 PASS 2 minutes
- 2025-08-14 PASS 2 minutes
- 2025-08-15 PASS 15 seconds
- 2025-08-16 PASS 15 seconds
- 2025-08-17 PASS 2 minutes
- 2025-08-18 PASS 15 seconds
- 2025-08-19 PASS 2 minutes
- 2025-08-20
  - PASS 15 seconds
  - PASS 17 seconds
- 2025-08-21 PASS 17 seconds
- 2025-08-22 PASS 2 minutes
- 2025-08-23 PASS 15 seconds
- 2025-08-24 PASS 15 seconds
- 2025-08-25 PASS 15 seconds
- 2025-08-26 PASS 17 seconds
- 2025-08-27 PASS 16 seconds
- 2025-08-28 PASS 17 seconds
- 2025-08-29 PASS 4 minutes
- 2025-08-30 PASS 15 seconds
- 2025-08-31 PASS 17 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:34:53+00:00
```
2025-09-01T00:34:53.2789076Z === RUN   TestMigProjectIPAccessList_settingCIDRBlock
2025-09-01T00:34:53.2789756Z     resource_project_ip_access_list_migration_test.go:37: Creating execution project: test-acc-tf-p-8471723422538315233
2025-09-01T00:34:53.2790382Z     resource_project_ip_access_list_migration_test.go:37: 
2025-09-01T00:34:53.2791541Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:34:53.2793250Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:34:53.2795383Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_migration_test.go:37
2025-09-01T00:34:53.2796400Z         	Error:      	Received unexpected error:
2025-09-01T00:34:53.2799038Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:34:53.2800325Z         	Test:       	TestMigProjectIPAccessList_settingCIDRBlock
2025-09-01T00:34:53.2802620Z         	Messages:   	Project creation failed: test-acc-tf-p-8471723422538315233, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:34:53.2804036Z --- FAIL: TestMigProjectIPAccessList_settingCIDRBlock (0.12s)
```

  - PASS 17 seconds
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 15 seconds
  - PASS 16 seconds
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-09-02 PASS 18 seconds
- 2025-09-03 PASS 14 seconds
- 2025-09-04 PASS 2 minutes