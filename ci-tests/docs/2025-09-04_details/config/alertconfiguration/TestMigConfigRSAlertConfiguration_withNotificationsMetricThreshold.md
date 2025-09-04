# config/alertconfiguration/TestMigConfigRSAlertConfiguration_withNotificationsMetricThreshold Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:31](#error-2025-09-01t0031120000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.03s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 22 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 27 seconds
- 2025-08-09 PASS 24 seconds
- 2025-08-10 PASS 20 seconds
- 2025-08-11 PASS 23 seconds
- 2025-08-12 PASS 20 seconds
- 2025-08-13 PASS 21 seconds
- 2025-08-14 PASS 24 seconds
- 2025-08-15 PASS 22 seconds
- 2025-08-16 PASS 21 seconds
- 2025-08-17 PASS 21 seconds
- 2025-08-18 PASS 22 seconds
- 2025-08-19 PASS 23 seconds
- 2025-08-20
  - PASS 22 seconds
  - PASS 21 seconds
- 2025-08-21 PASS 21 seconds
- 2025-08-22 PASS 22 seconds
- 2025-08-23 PASS 24 seconds
- 2025-08-24 PASS 18 seconds
- 2025-08-25 PASS 21 seconds
- 2025-08-26 PASS 34 seconds
- 2025-08-27 PASS 32 seconds
- 2025-08-28 PASS 22 seconds
- 2025-08-29 PASS 22 seconds
- 2025-08-30 PASS 21 seconds
- 2025-08-31 PASS 19 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:31:12+00:00
```
2025-09-01T00:31:12.9334190Z === RUN   TestMigConfigRSAlertConfiguration_withNotificationsMetricThreshold
2025-09-01T00:31:12.9335527Z     resource_migration_test.go:14: Creating execution project: test-acc-tf-p-3006369286054013886
2025-09-01T00:31:12.9352682Z     resource_migration_test.go:14: 
2025-09-01T00:31:12.9357588Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:31:12.9373868Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:31:12.9377387Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_migration_test.go:14
2025-09-01T00:31:12.9378848Z         	Error:      	Received unexpected error:
2025-09-01T00:31:12.9383742Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:12.9386263Z         	Test:       	TestMigConfigRSAlertConfiguration_withNotificationsMetricThreshold
2025-09-01T00:31:12.9390336Z         	Messages:   	Project creation failed: test-acc-tf-p-3006369286054013886, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:12.9393011Z --- FAIL: TestMigConfigRSAlertConfiguration_withNotificationsMetricThreshold (0.32s)
```

  - PASS 21 seconds
  - PASS 25 seconds
  - PASS 24 seconds
  - PASS 21 seconds
  - PASS 25 seconds
  - PASS 34 seconds
  - PASS 30 seconds
- 2025-09-02 PASS 21 seconds
- 2025-09-03 PASS 20 seconds
- 2025-09-04 PASS 20 seconds