# backup/onlinearchive/TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions Test Details
# Found 21 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 20) FAIL
Success rate: 95.24%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-13 01:30](#error-2026-02-13t0130270000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.04s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06 PASS 22 minutes
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09 PASS 20 minutes
- 2026-02-10: MISSING
- 2026-02-11 PASS 22 minutes
- 2026-02-12: MISSING
- 2026-02-13

### Error 2026-02-13T01:30:27+00:00
```
2026-02-13T01:30:27.5270222Z === RUN   TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-02-13T01:30:27.5270908Z     resource_migration_test.go:16: Creating execution project (1): test-acc-tf-p-1310928903883200411
2026-02-13T01:30:27.5271431Z     resource_migration_test.go:16: 
2026-02-13T01:30:27.5272453Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-13T01:30:27.5274210Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-13T01:30:27.5276068Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-13T01:30:27.5277745Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-02-13T01:30:27.5279617Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_migration_test.go:16
2026-02-13T01:30:27.5280815Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-13T01:30:27.5281325Z         	Error:      	Received unexpected error:
2026-02-13T01:30:27.5284043Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-13T01:30:27.5285612Z         	Test:       	TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-02-13T01:30:27.5287967Z         	Messages:   	Project creation failed: test-acc-tf-p-1310928903883200411, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-13T01:30:27.5289573Z --- FAIL: TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions (0.35s)
```

- 2026-02-14: MISSING
- 2026-02-15: MISSING
- 2026-02-16 PASS 22 minutes
- 2026-02-17: MISSING
- 2026-02-18 PASS 20 minutes
- 2026-02-19: MISSING
- 2026-02-20 PASS 19 minutes
- 2026-02-21: MISSING
- 2026-02-22: MISSING
- 2026-02-23 PASS 21 minutes
- 2026-02-24: MISSING
- 2026-02-25 PASS 21 minutes
- 2026-02-26: MISSING
- 2026-02-27 PASS 21 minutes
- 2026-02-28: MISSING
- 2026-03-01: MISSING
- 2026-03-02 PASS 19 minutes
- 2026-03-03: MISSING
- 2026-03-04 PASS 20 minutes
- 2026-03-05: MISSING
- 2026-03-06 PASS 25 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 20 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 24 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 24 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 21 minutes
  - PASS 18 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 21 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 25 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 23 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
