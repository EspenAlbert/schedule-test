# config/thirdpartyintegration/TestAccThirdPartyIntegration_datadog Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 01:01](#error-2026-07-09t0101370000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.09s
[2026-07-11 00:55](#error-2026-07-11t0055510000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.06s
[2026-07-21 00:54](#error-2026-07-21t0054520000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.09s
[2026-07-23 00:52](#error-2026-07-23t0052320000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:01:37+00:00
```
2026-07-09T01:01:37.7969878Z === RUN   TestAccThirdPartyIntegration_datadog
2026-07-09T01:01:37.7970918Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-3154619339901812603
2026-07-09T01:01:37.7971783Z     resource_test.go:53: 
2026-07-09T01:01:37.7973476Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:01:37.7976604Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:01:37.7978495Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:01:37.7980722Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:185
2026-07-09T01:01:37.7982798Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:53
2026-07-09T01:01:37.7984062Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:01:37.7984599Z         	Error:      	Received unexpected error:
2026-07-09T01:01:37.7987834Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:01:37.7989292Z         	Test:       	TestAccThirdPartyIntegration_datadog
2026-07-09T01:01:37.7991714Z         	Messages:   	Project creation failed: test-acc-tf-p-3154619339901812603, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:01:37.7993293Z --- FAIL: TestAccThirdPartyIntegration_datadog (0.89s)
```

- 2026-07-10 PASS 13 seconds
- 2026-07-11

### Error 2026-07-11T00:55:51+00:00
```
2026-07-11T00:55:51.6346690Z === RUN   TestAccThirdPartyIntegration_datadog
2026-07-11T00:55:51.6347277Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-2872103641414969400
2026-07-11T00:55:51.6347771Z     resource_test.go:53: 
2026-07-11T00:55:51.6348833Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:51.6350711Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:55:51.6352716Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:55:51.6354744Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:185
2026-07-11T00:55:51.6356821Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:53
2026-07-11T00:55:51.6358227Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:55:51.6358761Z         	Error:      	Received unexpected error:
2026-07-11T00:55:51.6361843Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:55:51.6363284Z         	Test:       	TestAccThirdPartyIntegration_datadog
2026-07-11T00:55:51.6365720Z         	Messages:   	Project creation failed: test-acc-tf-p-2872103641414969400, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:55:51.6367332Z --- FAIL: TestAccThirdPartyIntegration_datadog (0.56s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 11 seconds
- 2026-07-14 PASS 13 seconds
- 2026-07-15 PASS 13 seconds
- 2026-07-16 PASS 14 seconds
- 2026-07-17 PASS 14 seconds
- 2026-07-18 PASS 15 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:54:52+00:00
```
2026-07-21T00:54:52.7268240Z === RUN   TestAccThirdPartyIntegration_datadog
2026-07-21T00:54:52.7268901Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-4001415817814757858
2026-07-21T00:54:52.7269350Z     resource_test.go:53: 
2026-07-21T00:54:52.7270176Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:54:52.7271423Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:54:52.7272721Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:54:52.7274042Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:185
2026-07-21T00:54:52.7275434Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:53
2026-07-21T00:54:52.7276322Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:54:52.7276836Z         	Error:      	Received unexpected error:
2026-07-21T00:54:52.7278843Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:54:52.7279937Z         	Test:       	TestAccThirdPartyIntegration_datadog
2026-07-21T00:54:52.7281503Z         	Messages:   	Project creation failed: test-acc-tf-p-4001415817814757858, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:54:52.7282612Z --- FAIL: TestAccThirdPartyIntegration_datadog (0.90s)
```

- 2026-07-22 PASS 13 seconds
- 2026-07-23

### Error 2026-07-23T00:52:32+00:00
```
2026-07-23T00:52:32.2634903Z === RUN   TestAccThirdPartyIntegration_datadog
2026-07-23T00:52:32.2635519Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-1746588814846952797
2026-07-23T00:52:32.2636035Z     resource_test.go:53: 
2026-07-23T00:52:32.2636894Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:52:32.2638386Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:52:32.2639918Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:52:32.2641759Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:185
2026-07-23T00:52:32.2643448Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:53
2026-07-23T00:52:32.2644654Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:52:32.2645198Z         	Error:      	Received unexpected error:
2026-07-23T00:52:32.2647492Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:52:32.2648753Z         	Test:       	TestAccThirdPartyIntegration_datadog
2026-07-23T00:52:32.2650674Z         	Messages:   	Project creation failed: test-acc-tf-p-1746588814846952797, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:52:32.2652096Z --- FAIL: TestAccThirdPartyIntegration_datadog (0.76s)
```

- 2026-07-24 PASS 13 seconds
- 2026-07-25 PASS 8 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 13 seconds
- 2026-07-28 PASS 9 seconds
- 2026-07-29 PASS 11 seconds
- 2026-07-30 PASS 7 seconds
- 2026-07-31 PASS 12 seconds
- 2026-08-01 PASS 6 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 11 seconds
- 2026-08-04 PASS 8 seconds
- 2026-08-05 PASS 12 seconds
- 2026-08-06 PASS 6 seconds
- 2026-08-07 PASS 12 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 13 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 13 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 13 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 13 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 6 seconds
  - PASS 13 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 13 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
