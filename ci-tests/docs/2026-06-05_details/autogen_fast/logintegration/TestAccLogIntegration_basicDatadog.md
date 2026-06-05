# autogen_fast/logintegration/TestAccLogIntegration_basicDatadog Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 3)
Success rate: 90.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:07](#error-2026-05-09t0107490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 80.03s
[2026-05-28 01:01](#error-2026-05-28t0101180000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.08s
[2026-05-30 01:10](#error-2026-05-30t0110400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 8 seconds
- 2026-05-08 PASS 8 seconds
- 2026-05-09

### Error 2026-05-09T01:07:49+00:00
```
2026-05-09T01:07:49.2860691Z === RUN   TestAccLogIntegration_basicDatadog
2026-05-09T01:07:49.2861827Z     resource_test.go:196: Creating execution project (1): test-acc-tf-p-3168369105090802402
2026-05-09T01:07:49.2862807Z     resource_test.go:196: 
2026-05-09T01:07:49.2864636Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:07:49.2868431Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:07:49.2871918Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:07:49.2875746Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:196
2026-05-09T01:07:49.2877345Z         	Error:      	Received unexpected error:
2026-05-09T01:07:49.2881405Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2883433Z         	Test:       	TestAccLogIntegration_basicDatadog
2026-05-09T01:07:49.2887052Z         	Messages:   	Project creation failed: test-acc-tf-p-3168369105090802402, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2889516Z --- FAIL: TestAccLogIntegration_basicDatadog (80.34s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 8 seconds
- 2026-05-12 PASS 7 seconds
- 2026-05-13 PASS 7 seconds
- 2026-05-14 PASS 7 seconds
- 2026-05-15 PASS 8 seconds
- 2026-05-16 PASS 21 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 7 seconds
- 2026-05-19 PASS 36 seconds
- 2026-05-20 PASS 7 seconds
- 2026-05-21 PASS a minute
- 2026-05-22 PASS 8 seconds
- 2026-05-23 PASS 7 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 8 seconds
- 2026-05-26 PASS 7 seconds
- 2026-05-27 PASS 8 seconds
- 2026-05-28

### Error 2026-05-28T01:01:18+00:00
```
2026-05-28T01:01:18.6970289Z === RUN   TestAccLogIntegration_basicDatadog
2026-05-28T01:01:18.6970873Z     resource_test.go:196: Creating execution project (1): test-acc-tf-p-2213636948745505230
2026-05-28T01:01:18.6971385Z     resource_test.go:196: 
2026-05-28T01:01:18.6972254Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:18.6973911Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:18.6975531Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:18.6977271Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:196
2026-05-28T01:01:18.6978047Z         	Error:      	Received unexpected error:
2026-05-28T01:01:18.6980580Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:18.6981886Z         	Test:       	TestAccLogIntegration_basicDatadog
2026-05-28T01:01:18.6983968Z         	Messages:   	Project creation failed: test-acc-tf-p-2213636948745505230, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:18.6985386Z --- FAIL: TestAccLogIntegration_basicDatadog (0.81s)
```

- 2026-05-29 PASS 8 seconds
- 2026-05-30

### Error 2026-05-30T01:10:40+00:00
```
2026-05-30T01:10:40.4213900Z === RUN   TestAccLogIntegration_basicDatadog
2026-05-30T01:10:40.4214545Z     resource_test.go:196: Creating execution project (1): test-acc-tf-p-1876069239982972160
2026-05-30T01:10:40.4215107Z     resource_test.go:196: 
2026-05-30T01:10:40.4216073Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:10:40.4217920Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:10:40.4219955Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:10:40.4221914Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:196
2026-05-30T01:10:40.4222779Z         	Error:      	Received unexpected error:
2026-05-30T01:10:40.4225036Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.4226141Z         	Test:       	TestAccLogIntegration_basicDatadog
2026-05-30T01:10:40.4227947Z         	Messages:   	Project creation failed: test-acc-tf-p-1876069239982972160, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.4229150Z --- FAIL: TestAccLogIntegration_basicDatadog (73.22s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 7 seconds
- 2026-06-02 PASS a minute
- 2026-06-03 PASS 9 seconds
- 2026-06-04 PASS 7 seconds
- 2026-06-05 PASS 8 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 7 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 9 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 8 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 8 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
