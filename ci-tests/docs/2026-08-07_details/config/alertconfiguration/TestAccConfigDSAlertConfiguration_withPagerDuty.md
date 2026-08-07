# config/alertconfiguration/TestAccConfigDSAlertConfiguration_withPagerDuty Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.09s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7360684Z === RUN   TestAccConfigDSAlertConfiguration_withPagerDuty
2026-07-09T00:58:00.7361331Z     resource_test.go:1331: Creating execution project (1): test-acc-tf-p-5208473543258558704
2026-07-09T00:58:00.7362011Z     resource_test.go:1331: 
2026-07-09T00:58:00.7362961Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:00.7364847Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:00.7366919Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:00.7369055Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:1331
2026-07-09T00:58:00.7369913Z         	Error:      	Received unexpected error:
2026-07-09T00:58:00.7372880Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.7374392Z         	Test:       	TestAccConfigDSAlertConfiguration_withPagerDuty
2026-07-09T00:58:00.7377084Z         	Messages:   	Project creation failed: test-acc-tf-p-5208473543258558704, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.7378732Z --- FAIL: TestAccConfigDSAlertConfiguration_withPagerDuty (0.91s)
```

- 2026-07-10 PASS 14 seconds
- 2026-07-11 PASS 12 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 11 seconds
- 2026-07-14 PASS 10 seconds
- 2026-07-15 PASS 13 seconds
- 2026-07-16 PASS 10 seconds
- 2026-07-17 PASS 26 seconds
- 2026-07-18 PASS 6 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3811990Z === RUN   TestAccConfigDSAlertConfiguration_withPagerDuty
2026-07-21T00:53:42.3812419Z     resource_test.go:1331: Creating execution project (1): test-acc-tf-p-2432247800361823099
2026-07-21T00:53:42.3812764Z     resource_test.go:1331: 
2026-07-21T00:53:42.3813361Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.3814501Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.3815630Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.3817011Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:1331
2026-07-21T00:53:42.3817556Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.3819487Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.3820404Z         	Test:       	TestAccConfigDSAlertConfiguration_withPagerDuty
2026-07-21T00:53:42.3821865Z         	Messages:   	Project creation failed: test-acc-tf-p-2432247800361823099, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.3822849Z --- FAIL: TestAccConfigDSAlertConfiguration_withPagerDuty (0.54s)
```

- 2026-07-22 PASS 21 seconds
- 2026-07-23 PASS 8 seconds
- 2026-07-24 PASS 16 seconds
- 2026-07-25 PASS 10 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 15 seconds
- 2026-07-28 PASS 10 seconds
- 2026-07-29 PASS 16 seconds
- 2026-07-30 PASS 7 seconds
- 2026-07-31 PASS 21 seconds
- 2026-08-01 PASS 8 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 20 seconds
- 2026-08-04 PASS 7 seconds
- 2026-08-05 PASS 21 seconds
- 2026-08-06 PASS 9 seconds
- 2026-08-07 PASS 15 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 16 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 24 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 25 seconds
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
  - PASS 26 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 22 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
