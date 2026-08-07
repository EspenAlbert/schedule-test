# config/alertconfiguration/TestAccConfigRSAlertConfiguration_withEmailToPagerDuty Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.06s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7247507Z === RUN   TestAccConfigRSAlertConfiguration_withEmailToPagerDuty
2026-07-09T00:58:00.7248175Z     resource_test.go:535: Creating execution project (1): test-acc-tf-p-8215471714138449887
2026-07-09T00:58:00.7248696Z     resource_test.go:535: 
2026-07-09T00:58:00.7249646Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:00.7251530Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:00.7253577Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:00.7255993Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:535
2026-07-09T00:58:00.7256863Z         	Error:      	Received unexpected error:
2026-07-09T00:58:00.7259972Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.7261532Z         	Test:       	TestAccConfigRSAlertConfiguration_withEmailToPagerDuty
2026-07-09T00:58:00.7264059Z         	Messages:   	Project creation failed: test-acc-tf-p-8215471714138449887, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.7265872Z --- FAIL: TestAccConfigRSAlertConfiguration_withEmailToPagerDuty (1.63s)
```

- 2026-07-10 PASS 25 seconds
- 2026-07-11 PASS 15 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 15 seconds
- 2026-07-14 PASS 13 seconds
- 2026-07-15 PASS 21 seconds
- 2026-07-16 PASS 13 seconds
- 2026-07-17 PASS 37 seconds
- 2026-07-18 PASS 8 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3743784Z === RUN   TestAccConfigRSAlertConfiguration_withEmailToPagerDuty
2026-07-21T00:53:42.3744326Z     resource_test.go:535: Creating execution project (1): test-acc-tf-p-778034332709420133
2026-07-21T00:53:42.3744663Z     resource_test.go:535: 
2026-07-21T00:53:42.3745262Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.3746417Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.3747575Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.3748934Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:535
2026-07-21T00:53:42.3749479Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.3751246Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.3752187Z         	Test:       	TestAccConfigRSAlertConfiguration_withEmailToPagerDuty
2026-07-21T00:53:42.3753720Z         	Messages:   	Project creation failed: test-acc-tf-p-778034332709420133, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.3754741Z --- FAIL: TestAccConfigRSAlertConfiguration_withEmailToPagerDuty (0.47s)
```

- 2026-07-22 PASS 34 seconds
- 2026-07-23 PASS 10 seconds
- 2026-07-24 PASS 29 seconds
- 2026-07-25 PASS 13 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 19 seconds
- 2026-07-28 PASS 13 seconds
- 2026-07-29 PASS 23 seconds
- 2026-07-30 PASS 10 seconds
- 2026-07-31 PASS 32 seconds
- 2026-08-01 PASS 15 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 27 seconds
- 2026-08-04 PASS 10 seconds
- 2026-08-05 PASS 28 seconds
- 2026-08-06 PASS 16 seconds
- 2026-08-07 PASS 24 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 23 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 36 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 31 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 25 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 16 seconds
  - PASS 37 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 35 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
