# config/alertconfiguration/TestAccConfigDSAlertConfigurations_withOutputTypes Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.08s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7397845Z === RUN   TestAccConfigDSAlertConfigurations_withOutputTypes
2026-07-09T00:58:00.7398671Z     resource_test.go:1375: Creating execution project (1): test-acc-tf-p-8905376309666325366
2026-07-09T00:58:00.7399183Z     resource_test.go:1375: 
2026-07-09T00:58:00.7400130Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:00.7402013Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:00.7403894Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:00.7406426Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:1375
2026-07-09T00:58:00.7407953Z         	Error:      	Received unexpected error:
2026-07-09T00:58:00.7413263Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.7414856Z         	Test:       	TestAccConfigDSAlertConfigurations_withOutputTypes
2026-07-09T00:58:00.7417616Z         	Messages:   	Project creation failed: test-acc-tf-p-8905376309666325366, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.7419276Z --- FAIL: TestAccConfigDSAlertConfigurations_withOutputTypes (0.76s)
```

- 2026-07-10 PASS 7 seconds
- 2026-07-11 PASS 7 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 6 seconds
- 2026-07-14 PASS 8 seconds
- 2026-07-15 PASS 7 seconds
- 2026-07-16 PASS 6 seconds
- 2026-07-17 PASS 7 seconds
- 2026-07-18 PASS 7 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3834341Z === RUN   TestAccConfigDSAlertConfigurations_withOutputTypes
2026-07-21T00:53:42.3834771Z     resource_test.go:1375: Creating execution project (1): test-acc-tf-p-7433835526242749943
2026-07-21T00:53:42.3835115Z     resource_test.go:1375: 
2026-07-21T00:53:42.3835708Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.3836839Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.3837994Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.3839325Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:1375
2026-07-21T00:53:42.3839870Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.3841658Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.3842591Z         	Test:       	TestAccConfigDSAlertConfigurations_withOutputTypes
2026-07-21T00:53:42.3844082Z         	Messages:   	Project creation failed: test-acc-tf-p-7433835526242749943, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.3845076Z --- FAIL: TestAccConfigDSAlertConfigurations_withOutputTypes (0.63s)
```

- 2026-07-22 PASS 6 seconds
- 2026-07-23 PASS 6 seconds
- 2026-07-24 PASS 7 seconds
- 2026-07-25 PASS 7 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 7 seconds
- 2026-07-28 PASS 7 seconds
- 2026-07-29 PASS 7 seconds
- 2026-07-30 PASS 4 seconds
- 2026-07-31 PASS 7 seconds
- 2026-08-01 PASS 6 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 7 seconds
- 2026-08-04 PASS 5 seconds
- 2026-08-05 PASS 7 seconds
- 2026-08-06 PASS 7 seconds
- 2026-08-07 PASS 8 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 6 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 6 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 6 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 6 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 6 seconds
  - PASS 6 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 6 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
