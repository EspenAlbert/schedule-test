# config/alertconfiguration/TestAccConfigRSAlertConfiguration_withOpsGenie Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 1.03s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7267471Z === RUN   TestAccConfigRSAlertConfiguration_withOpsGenie
2026-07-09T00:58:00.7268112Z     resource_test.go:598: Creating execution project (1): test-acc-tf-p-8625483650115000310
2026-07-09T00:58:00.7268624Z     resource_test.go:598: 
2026-07-09T00:58:00.7269566Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:00.7271466Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:00.7273352Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:00.7275579Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:598
2026-07-09T00:58:00.7276449Z         	Error:      	Received unexpected error:
2026-07-09T00:58:00.7279412Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.7280919Z         	Test:       	TestAccConfigRSAlertConfiguration_withOpsGenie
2026-07-09T00:58:00.7283421Z         	Messages:   	Project creation failed: test-acc-tf-p-8625483650115000310, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.7285069Z --- FAIL: TestAccConfigRSAlertConfiguration_withOpsGenie (1.30s)
```

- 2026-07-10 PASS 12 seconds
- 2026-07-11 PASS 11 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 10 seconds
- 2026-07-14 PASS 7 seconds
- 2026-07-15 PASS 13 seconds
- 2026-07-16 PASS 8 seconds
- 2026-07-17 PASS 23 seconds
- 2026-07-18 PASS 6 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3755821Z === RUN   TestAccConfigRSAlertConfiguration_withOpsGenie
2026-07-21T00:53:42.3756237Z     resource_test.go:598: Creating execution project (1): test-acc-tf-p-3416248072977902895
2026-07-21T00:53:42.3756564Z     resource_test.go:598: 
2026-07-21T00:53:42.3757168Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.3758433Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.3759620Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.3760842Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:598
2026-07-21T00:53:42.3761381Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.3763133Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.3764042Z         	Test:       	TestAccConfigRSAlertConfiguration_withOpsGenie
2026-07-21T00:53:42.3765536Z         	Messages:   	Project creation failed: test-acc-tf-p-3416248072977902895, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.3766605Z --- FAIL: TestAccConfigRSAlertConfiguration_withOpsGenie (0.69s)
```

- 2026-07-22 PASS 19 seconds
- 2026-07-23 PASS 8 seconds
- 2026-07-24 PASS 13 seconds
- 2026-07-25 PASS 9 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 13 seconds
- 2026-07-28 PASS 9 seconds
- 2026-07-29 PASS 16 seconds
- 2026-07-30 PASS 7 seconds
- 2026-07-31 PASS 20 seconds
- 2026-08-01 PASS 9 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 19 seconds
- 2026-08-04 PASS 7 seconds
- 2026-08-05 PASS 21 seconds
- 2026-08-06 PASS 9 seconds
- 2026-08-07 PASS 13 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 15 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 24 seconds
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
- 2026-07-26 PASS 18 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 9 seconds
  - PASS 25 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 17 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
