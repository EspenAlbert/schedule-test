# config/alertconfiguration/TestAccConfigDSAlertConfigurations_invalidOutputTypeValue Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.08s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7419814Z === RUN   TestAccConfigDSAlertConfigurations_invalidOutputTypeValue
2026-07-09T00:58:00.7420515Z     resource_test.go:1397: Creating execution project (1): test-acc-tf-p-3032639364561848374
2026-07-09T00:58:00.7421049Z     resource_test.go:1397: 
2026-07-09T00:58:00.7422006Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:00.7423895Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:00.7426066Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:00.7428091Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:1397
2026-07-09T00:58:00.7428939Z         	Error:      	Received unexpected error:
2026-07-09T00:58:00.7431897Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.7433461Z         	Test:       	TestAccConfigDSAlertConfigurations_invalidOutputTypeValue
2026-07-09T00:58:00.7436119Z         	Messages:   	Project creation failed: test-acc-tf-p-3032639364561848374, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.7437806Z --- FAIL: TestAccConfigDSAlertConfigurations_invalidOutputTypeValue (0.78s)
```

- 2026-07-10 PASS a moment
- 2026-07-11 PASS a moment
- 2026-07-12: MISSING
- 2026-07-13 PASS a moment
- 2026-07-14 PASS a moment
- 2026-07-15 PASS a moment
- 2026-07-16 PASS a moment
- 2026-07-17 PASS a moment
- 2026-07-18 PASS a moment
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3845442Z === RUN   TestAccConfigDSAlertConfigurations_invalidOutputTypeValue
2026-07-21T00:53:42.3845891Z     resource_test.go:1397: Creating execution project (1): test-acc-tf-p-4919615933729641801
2026-07-21T00:53:42.3846233Z     resource_test.go:1397: 
2026-07-21T00:53:42.3846836Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.3847987Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.3849259Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.3850491Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:1397
2026-07-21T00:53:42.3851016Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.3852772Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.3853709Z         	Test:       	TestAccConfigDSAlertConfigurations_invalidOutputTypeValue
2026-07-21T00:53:42.3855212Z         	Messages:   	Project creation failed: test-acc-tf-p-4919615933729641801, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.3856280Z --- FAIL: TestAccConfigDSAlertConfigurations_invalidOutputTypeValue (0.49s)
```

- 2026-07-22 PASS a moment
- 2026-07-23 PASS a moment
- 2026-07-24 PASS a moment
- 2026-07-25 PASS a moment
- 2026-07-26: MISSING
- 2026-07-27 PASS a moment
- 2026-07-28 PASS a moment
- 2026-07-29 PASS a moment
- 2026-07-30 PASS a moment
- 2026-07-31 PASS a moment
- 2026-08-01 PASS a moment
- 2026-08-02: MISSING
- 2026-08-03 PASS a moment
- 2026-08-04 PASS a moment
- 2026-08-05 PASS a moment
- 2026-08-06 PASS a moment
- 2026-08-07 PASS a moment

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS a moment
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS a moment
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS a moment
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS a moment
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a moment
  - PASS a moment
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS a moment
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
