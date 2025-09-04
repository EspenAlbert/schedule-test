# config/alertconfiguration/TestMigConfigRSAlertConfiguration_withDataDog Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:31](#error-2025-09-01t0031120000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 8 seconds
- 2025-08-07 PASS 31 seconds
- 2025-08-08 PASS 9 seconds
- 2025-08-09 PASS 8 seconds
- 2025-08-10 PASS 8 seconds
- 2025-08-11 PASS 10 seconds
- 2025-08-12 PASS 6 seconds
- 2025-08-13 PASS 8 seconds
- 2025-08-14 PASS 8 seconds
- 2025-08-15 PASS 6 seconds
- 2025-08-16 PASS 6 seconds
- 2025-08-17 PASS 9 seconds
- 2025-08-18 PASS 8 seconds
- 2025-08-19 PASS 7 seconds
- 2025-08-20
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-08-21 PASS 8 seconds
- 2025-08-22 PASS 7 seconds
- 2025-08-23 PASS 8 seconds
- 2025-08-24 PASS 6 seconds
- 2025-08-25 PASS 8 seconds
- 2025-08-26 PASS 7 seconds
- 2025-08-27 PASS 7 seconds
- 2025-08-28 PASS 6 seconds
- 2025-08-29 PASS 9 seconds
- 2025-08-30 PASS 6 seconds
- 2025-08-31 PASS 9 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:31:12+00:00
```
2025-09-01T00:31:12.9580776Z === RUN   TestMigConfigRSAlertConfiguration_withDataDog
2025-09-01T00:31:12.9581754Z     resource_migration_test.go:149: Creating execution project: test-acc-tf-p-6581742460981974907
2025-09-01T00:31:12.9582577Z     resource_migration_test.go:149: 
2025-09-01T00:31:12.9584084Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:31:12.9586960Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:31:12.9620483Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:378
2025-09-01T00:31:12.9623946Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_migration_test.go:149
2025-09-01T00:31:12.9625312Z         	Error:      	Received unexpected error:
2025-09-01T00:31:12.9630028Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:12.9632280Z         	Test:       	TestMigConfigRSAlertConfiguration_withDataDog
2025-09-01T00:31:12.9636359Z         	Messages:   	Project creation failed: test-acc-tf-p-6581742460981974907, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:12.9638753Z --- FAIL: TestMigConfigRSAlertConfiguration_withDataDog (0.17s)
```

  - PASS 7 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-09-02 PASS 7 seconds
- 2025-09-03 PASS 6 seconds
- 2025-09-04 PASS 7 seconds