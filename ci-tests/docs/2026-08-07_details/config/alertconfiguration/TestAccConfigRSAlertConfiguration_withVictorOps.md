# config/alertconfiguration/TestAccConfigRSAlertConfiguration_withVictorOps Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.05s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.00s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7285672Z === RUN   TestAccConfigRSAlertConfiguration_withVictorOps
2026-07-09T00:58:00.7286305Z     resource_test.go:620: Creating execution project (1): test-acc-tf-p-93813422521001306
2026-07-09T00:58:00.7286813Z     resource_test.go:620: 
2026-07-09T00:58:00.7287763Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:00.7289927Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:00.7291819Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:00.7293836Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:620
2026-07-09T00:58:00.7294793Z         	Error:      	Received unexpected error:
2026-07-09T00:58:00.7297893Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.7299427Z         	Test:       	TestAccConfigRSAlertConfiguration_withVictorOps
2026-07-09T00:58:00.7301915Z         	Messages:   	Project creation failed: test-acc-tf-p-93813422521001306, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.7303555Z --- FAIL: TestAccConfigRSAlertConfiguration_withVictorOps (1.52s)
```

- 2026-07-10 PASS 13 seconds
- 2026-07-11 PASS 9 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 10 seconds
- 2026-07-14 PASS 9 seconds
- 2026-07-15 PASS 12 seconds
- 2026-07-16 PASS 9 seconds
- 2026-07-17 PASS 22 seconds
- 2026-07-18 PASS 5 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3766933Z === RUN   TestAccConfigRSAlertConfiguration_withVictorOps
2026-07-21T00:53:42.3767350Z     resource_test.go:620: Creating execution project (1): test-acc-tf-p-8534386278070682750
2026-07-21T00:53:42.3767682Z     resource_test.go:620: 
2026-07-21T00:53:42.3768273Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.3769531Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.3770680Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.3771915Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:620
2026-07-21T00:53:42.3772468Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.3774262Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.3775166Z         	Test:       	TestAccConfigRSAlertConfiguration_withVictorOps
2026-07-21T00:53:42.3776631Z         	Messages:   	Project creation failed: test-acc-tf-p-8534386278070682750, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.3777611Z --- FAIL: TestAccConfigRSAlertConfiguration_withVictorOps (1.03s)
```

- 2026-07-22 PASS 18 seconds
- 2026-07-23 PASS 9 seconds
- 2026-07-24 PASS 14 seconds
- 2026-07-25 PASS 8 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 12 seconds
- 2026-07-28 PASS 9 seconds
- 2026-07-29 PASS 16 seconds
- 2026-07-30 PASS 7 seconds
- 2026-07-31 PASS 19 seconds
- 2026-08-01 PASS 7 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 19 seconds
- 2026-08-04 PASS 7 seconds
- 2026-08-05 PASS 21 seconds
- 2026-08-06 PASS 8 seconds
- 2026-08-07 PASS 11 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 15 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 23 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 23 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 17 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 9 seconds
  - PASS 24 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 20 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
