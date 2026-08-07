# config/alertconfiguration/TestAccConfigRSAlertConfiguration_addNotification Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.02s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7114498Z === RUN   TestAccConfigRSAlertConfiguration_addNotification
2026-07-09T00:58:00.7115127Z     resource_test.go:327: Creating execution project (1): test-acc-tf-p-1939123785957566199
2026-07-09T00:58:00.7115865Z     resource_test.go:327: 
2026-07-09T00:58:00.7116800Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:00.7118662Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:00.7120525Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:00.7122511Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:327
2026-07-09T00:58:00.7123344Z         	Error:      	Received unexpected error:
2026-07-09T00:58:00.7126528Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.7128036Z         	Test:       	TestAccConfigRSAlertConfiguration_addNotification
2026-07-09T00:58:00.7130608Z         	Messages:   	Project creation failed: test-acc-tf-p-1939123785957566199, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.7132280Z --- FAIL: TestAccConfigRSAlertConfiguration_addNotification (1.19s)
```

- 2026-07-10 PASS 20 seconds
- 2026-07-11 PASS 15 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 14 seconds
- 2026-07-14 PASS 12 seconds
- 2026-07-15 PASS 18 seconds
- 2026-07-16 PASS 12 seconds
- 2026-07-17 PASS 35 seconds
- 2026-07-18 PASS 8 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3674496Z === RUN   TestAccConfigRSAlertConfiguration_addNotification
2026-07-21T00:53:42.3674922Z     resource_test.go:327: Creating execution project (1): test-acc-tf-p-5888112427507580094
2026-07-21T00:53:42.3675271Z     resource_test.go:327: 
2026-07-21T00:53:42.3675868Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.3677023Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.3678224Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.3679569Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:327
2026-07-21T00:53:42.3680106Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.3681840Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.3682772Z         	Test:       	TestAccConfigRSAlertConfiguration_addNotification
2026-07-21T00:53:42.3684258Z         	Messages:   	Project creation failed: test-acc-tf-p-5888112427507580094, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.3685272Z --- FAIL: TestAccConfigRSAlertConfiguration_addNotification (0.83s)
```

- 2026-07-22 PASS 32 seconds
- 2026-07-23 PASS 10 seconds
- 2026-07-24 PASS 26 seconds
- 2026-07-25 PASS 12 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 19 seconds
- 2026-07-28 PASS 12 seconds
- 2026-07-29 PASS 23 seconds
- 2026-07-30 PASS 10 seconds
- 2026-07-31 PASS 31 seconds
- 2026-08-01 PASS 14 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 26 seconds
- 2026-08-04 PASS 10 seconds
- 2026-08-05 PASS 27 seconds
- 2026-08-06 PASS 16 seconds
- 2026-08-07 PASS 22 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 22 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 33 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 30 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 23 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 15 seconds
  - PASS 35 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 33 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
