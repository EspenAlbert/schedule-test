# config/alertconfiguration/TestAccConfigDSAlertConfiguration_withOutput Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.06s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7341977Z === RUN   TestAccConfigDSAlertConfiguration_withOutput
2026-07-09T00:58:00.7342613Z     resource_test.go:1302: Creating execution project (1): test-acc-tf-p-5611385304918413115
2026-07-09T00:58:00.7343139Z     resource_test.go:1302: 
2026-07-09T00:58:00.7344078Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:00.7346243Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:00.7348141Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:00.7350176Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:1302
2026-07-09T00:58:00.7351033Z         	Error:      	Received unexpected error:
2026-07-09T00:58:00.7353999Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.7355773Z         	Test:       	TestAccConfigDSAlertConfiguration_withOutput
2026-07-09T00:58:00.7358532Z         	Messages:   	Project creation failed: test-acc-tf-p-5611385304918413115, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:00.7360196Z --- FAIL: TestAccConfigDSAlertConfiguration_withOutput (0.56s)
```

- 2026-07-10 PASS 14 seconds
- 2026-07-11 PASS 13 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 11 seconds
- 2026-07-14 PASS 10 seconds
- 2026-07-15 PASS 13 seconds
- 2026-07-16 PASS 10 seconds
- 2026-07-17 PASS 26 seconds
- 2026-07-18 PASS 7 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3800705Z === RUN   TestAccConfigDSAlertConfiguration_withOutput
2026-07-21T00:53:42.3801117Z     resource_test.go:1302: Creating execution project (1): test-acc-tf-p-8626497854779258824
2026-07-21T00:53:42.3801462Z     resource_test.go:1302: 
2026-07-21T00:53:42.3802061Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.3803209Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.3804342Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.3805568Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/alertconfiguration/resource_test.go:1302
2026-07-21T00:53:42.3806089Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.3808088Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.3809111Z         	Test:       	TestAccConfigDSAlertConfiguration_withOutput
2026-07-21T00:53:42.3810604Z         	Messages:   	Project creation failed: test-acc-tf-p-8626497854779258824, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.3811667Z --- FAIL: TestAccConfigDSAlertConfiguration_withOutput (0.45s)
```

- 2026-07-22 PASS 21 seconds
- 2026-07-23 PASS 7 seconds
- 2026-07-24 PASS 15 seconds
- 2026-07-25 PASS 10 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 15 seconds
- 2026-07-28 PASS 10 seconds
- 2026-07-29 PASS 17 seconds
- 2026-07-30 PASS 7 seconds
- 2026-07-31 PASS 20 seconds
- 2026-08-01 PASS 9 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 20 seconds
- 2026-08-04 PASS 7 seconds
- 2026-08-05 PASS 21 seconds
- 2026-08-06 PASS 10 seconds
- 2026-08-07 PASS 14 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 16 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 25 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 24 seconds
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
  - PASS 27 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 21 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
