# config/thirdpartyintegration/TestAccThirdPartyIntegration_victorOps Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:01](#error-2026-07-09t0101370000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.02s
[2026-07-11 00:55](#error-2026-07-11t0055510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 96.08s
[2026-07-21 00:54](#error-2026-07-21t0054520000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s
[2026-07-23 00:52](#error-2026-07-23t0052320000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:01:37+00:00
```
2026-07-09T01:01:37.7931731Z === RUN   TestAccThirdPartyIntegration_victorOps
2026-07-09T01:01:37.7932776Z     resource_test.go:49: Creating execution project (1): test-acc-tf-p-7824362788428933046
2026-07-09T01:01:37.7933640Z     resource_test.go:49: 
2026-07-09T01:01:37.7935533Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:01:37.7939010Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:01:37.7942447Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:01:37.7946426Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:148
2026-07-09T01:01:37.7950226Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:49
2026-07-09T01:01:37.7952549Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:01:37.7953492Z         	Error:      	Received unexpected error:
2026-07-09T01:01:37.7959164Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:01:37.7961722Z         	Test:       	TestAccThirdPartyIntegration_victorOps
2026-07-09T01:01:37.7966343Z         	Messages:   	Project creation failed: test-acc-tf-p-7824362788428933046, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:01:37.7969178Z --- FAIL: TestAccThirdPartyIntegration_victorOps (1.17s)
```

- 2026-07-10 PASS 7 seconds
- 2026-07-11

### Error 2026-07-11T00:55:51+00:00
```
2026-07-11T00:55:51.6328334Z === RUN   TestAccThirdPartyIntegration_victorOps
2026-07-11T00:55:51.6328923Z     resource_test.go:49: Creating execution project (1): test-acc-tf-p-5313606048705636287
2026-07-11T00:55:51.6329421Z     resource_test.go:49: 
2026-07-11T00:55:51.6330351Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:51.6332224Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:55:51.6334112Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:55:51.6336140Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:148
2026-07-11T00:55:51.6338324Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:49
2026-07-11T00:55:51.6339596Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:55:51.6340124Z         	Error:      	Received unexpected error:
2026-07-11T00:55:51.6342147Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.6343232Z         	Test:       	TestAccThirdPartyIntegration_victorOps
2026-07-11T00:55:51.6345065Z         	Messages:   	Project creation failed: test-acc-tf-p-5313606048705636287, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.6346281Z --- FAIL: TestAccThirdPartyIntegration_victorOps (96.77s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 7 seconds
- 2026-07-14 PASS 9 seconds
- 2026-07-15 PASS 8 seconds
- 2026-07-16 PASS 8 seconds
- 2026-07-17 PASS 9 seconds
- 2026-07-18 PASS 9 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:54:52+00:00
```
2026-07-21T00:54:52.7254044Z === RUN   TestAccThirdPartyIntegration_victorOps
2026-07-21T00:54:52.7254546Z     resource_test.go:49: Creating execution project (1): test-acc-tf-p-6491512416367635078
2026-07-21T00:54:52.7254963Z     resource_test.go:49: 
2026-07-21T00:54:52.7255654Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:54:52.7256892Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:54:52.7258151Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:54:52.7259581Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:148
2026-07-21T00:54:52.7260934Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:49
2026-07-21T00:54:52.7261831Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:54:52.7262334Z         	Error:      	Received unexpected error:
2026-07-21T00:54:52.7264193Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:54:52.7265194Z         	Test:       	TestAccThirdPartyIntegration_victorOps
2026-07-21T00:54:52.7266783Z         	Messages:   	Project creation failed: test-acc-tf-p-6491512416367635078, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:54:52.7267894Z --- FAIL: TestAccThirdPartyIntegration_victorOps (0.68s)
```

- 2026-07-22 PASS 9 seconds
- 2026-07-23

### Error 2026-07-23T00:52:32+00:00
```
2026-07-23T00:52:32.2617002Z === RUN   TestAccThirdPartyIntegration_victorOps
2026-07-23T00:52:32.2617616Z     resource_test.go:49: Creating execution project (1): test-acc-tf-p-3169206934052093021
2026-07-23T00:52:32.2618142Z     resource_test.go:49: 
2026-07-23T00:52:32.2618965Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:52:32.2620915Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:52:32.2622476Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:52:32.2624134Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:148
2026-07-23T00:52:32.2625861Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:49
2026-07-23T00:52:32.2626941Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:52:32.2627578Z         	Error:      	Received unexpected error:
2026-07-23T00:52:32.2629855Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:52:32.2631226Z         	Test:       	TestAccThirdPartyIntegration_victorOps
2026-07-23T00:52:32.2633145Z         	Messages:   	Project creation failed: test-acc-tf-p-3169206934052093021, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:52:32.2634463Z --- FAIL: TestAccThirdPartyIntegration_victorOps (0.55s)
```

- 2026-07-24 PASS 8 seconds
- 2026-07-25 PASS 5 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 8 seconds
- 2026-07-28 PASS 6 seconds
- 2026-07-29 PASS 8 seconds
- 2026-07-30 PASS 4 seconds
- 2026-07-31 PASS 8 seconds
- 2026-08-01 PASS 4 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 8 seconds
- 2026-08-04 PASS 5 seconds
- 2026-08-05 PASS 9 seconds
- 2026-08-06 PASS 4 seconds
- 2026-08-07 PASS 7 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 10 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 9 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 9 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 9 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 4 seconds
  - PASS 10 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 8 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
