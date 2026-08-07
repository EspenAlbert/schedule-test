# config/alertconfiguration/TestAccConfigRSAlertConfiguration_updatePagerDutyWithNotifierId Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.03s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.09s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7170116Z === RUN   TestAccConfigRSAlertConfiguration_updatePagerDutyWithNotifierId
2026-07-09T00:58:00.7170804Z     resource_test.go:410: Creating execution project (1): test-acc-tf-p-155885480937391040
2026-07-09T00:58:00.7171302Z     resource_test.go:410: 
2026-07-09T00:58:00.7172230Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:00.7174091Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:00.7176077Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:00.7178066Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:410
2026-07-09T00:58:00.7178903Z         	Error:      	Received unexpected error:
2026-07-09T00:58:00.7181807Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.7183388Z         	Test:       	TestAccConfigRSAlertConfiguration_updatePagerDutyWithNotifierId
2026-07-09T00:58:00.7186151Z         	Messages:   	Project creation failed: test-acc-tf-p-155885480937391040, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.7187856Z --- FAIL: TestAccConfigRSAlertConfiguration_updatePagerDutyWithNotifierId (0.33s)
```

- 2026-07-10 PASS 22 seconds
- 2026-07-11 PASS 14 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 13 seconds
- 2026-07-14 PASS 12 seconds
- 2026-07-15 PASS 19 seconds
- 2026-07-16 PASS 12 seconds
- 2026-07-17 PASS 35 seconds
- 2026-07-18 PASS 8 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3708515Z === RUN   TestAccConfigRSAlertConfiguration_updatePagerDutyWithNotifierId
2026-07-21T00:53:42.3708990Z     resource_test.go:410: Creating execution project (1): test-acc-tf-p-6698736405388512931
2026-07-21T00:53:42.3709331Z     resource_test.go:410: 
2026-07-21T00:53:42.3709924Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.3711066Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.3712211Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.3713426Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:410
2026-07-21T00:53:42.3713959Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.3715732Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.3716658Z         	Test:       	TestAccConfigRSAlertConfiguration_updatePagerDutyWithNotifierId
2026-07-21T00:53:42.3718167Z         	Messages:   	Project creation failed: test-acc-tf-p-6698736405388512931, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.3719349Z --- FAIL: TestAccConfigRSAlertConfiguration_updatePagerDutyWithNotifierId (0.89s)
```

- 2026-07-22 PASS 31 seconds
- 2026-07-23 PASS 10 seconds
- 2026-07-24 PASS 25 seconds
- 2026-07-25 PASS 12 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 18 seconds
- 2026-07-28 PASS 12 seconds
- 2026-07-29 PASS 22 seconds
- 2026-07-30 PASS 9 seconds
- 2026-07-31 PASS 31 seconds
- 2026-08-01 PASS 13 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 25 seconds
- 2026-08-04 PASS 9 seconds
- 2026-08-05 PASS 28 seconds
- 2026-08-06 PASS 15 seconds
- 2026-08-07 PASS 21 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 21 seconds
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
- 2026-07-26 PASS 24 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 16 seconds
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
