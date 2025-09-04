# config/alertconfiguration/TestAccConfigRSAlertConfiguration_withVictorOps Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:31](#error-2025-09-01t0031130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 10 seconds
- 2025-08-07 PASS 16 seconds
- 2025-08-08 PASS 10 seconds
- 2025-08-09 PASS 10 seconds
- 2025-08-10 PASS 9 seconds
- 2025-08-11 PASS 10 seconds
- 2025-08-12 PASS 9 seconds
- 2025-08-13 PASS 10 seconds
- 2025-08-14 PASS 11 seconds
- 2025-08-15 PASS 10 seconds
- 2025-08-16 PASS 9 seconds
- 2025-08-17 PASS 10 seconds
- 2025-08-18 PASS 9 seconds
- 2025-08-19 PASS 10 seconds
- 2025-08-20
  - PASS 10 seconds
  - PASS 11 seconds
- 2025-08-21 PASS 10 seconds
- 2025-08-22 PASS 10 seconds
- 2025-08-23 PASS 9 seconds
- 2025-08-24 PASS 9 seconds
- 2025-08-25 PASS 10 seconds
- 2025-08-26 PASS 10 seconds
- 2025-08-27 PASS 9 seconds
- 2025-08-28 PASS 9 seconds
- 2025-08-29 PASS 10 seconds
- 2025-08-30 PASS 10 seconds
- 2025-08-31 PASS 9 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:31:13+00:00
```
2025-09-01T00:31:13.0429093Z === RUN   TestAccConfigRSAlertConfiguration_withVictorOps
2025-09-01T00:31:13.0460241Z     resource_test.go:549: Creating execution project: test-acc-tf-p-8408766878942158069
2025-09-01T00:31:13.0460981Z     resource_test.go:549: 
2025-09-01T00:31:13.0462427Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:31:13.0622319Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:31:13.0626212Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:549
2025-09-01T00:31:13.0627668Z         	Error:      	Received unexpected error:
2025-09-01T00:31:13.0632888Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:13.0635361Z         	Test:       	TestAccConfigRSAlertConfiguration_withVictorOps
2025-09-01T00:31:13.0643414Z         	Messages:   	Project creation failed: test-acc-tf-p-8408766878942158069, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:13.0645916Z --- FAIL: TestAccConfigRSAlertConfiguration_withVictorOps (0.18s)
```

  - PASS 10 seconds
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 13 seconds
  - PASS 10 seconds
- 2025-09-02 PASS 9 seconds
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 10 seconds