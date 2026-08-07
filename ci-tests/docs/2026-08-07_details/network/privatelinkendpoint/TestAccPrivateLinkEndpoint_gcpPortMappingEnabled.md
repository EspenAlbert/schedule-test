# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_gcpPortMappingEnabled Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 109.02s
[2026-07-21 00:52](#error-2026-07-21t0052210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 116.08s
[2026-07-23 00:53](#error-2026-07-23t0053540000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:29+00:00
```
2026-07-09T00:58:29.1618632Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-07-09T00:58:29.1619518Z     resource_test.go:130: Creating execution project (1): test-acc-tf-p-4577764605922527116
2026-07-09T00:58:29.1620058Z     resource_test.go:130: 
2026-07-09T00:58:29.1621008Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:29.1622875Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:29.1624730Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:29.1626712Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:141
2026-07-09T00:58:29.1628747Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:130
2026-07-09T00:58:29.1630239Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T00:58:29.1630799Z         	Error:      	Received unexpected error:
2026-07-09T00:58:29.1632806Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:29.1633960Z         	Test:       	TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-07-09T00:58:29.1635824Z         	Messages:   	Project creation failed: test-acc-tf-p-4577764605922527116, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:29.1637112Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (109.23s)
```

- 2026-07-10 PASS 6 minutes
- 2026-07-11 PASS 5 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 5 minutes
- 2026-07-14 PASS 5 minutes
- 2026-07-15 PASS 6 minutes
- 2026-07-16 PASS 4 minutes
- 2026-07-17 PASS 5 minutes
- 2026-07-18 PASS 4 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:21+00:00
```
2026-07-21T00:52:21.4380671Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-07-21T00:52:21.4381823Z     resource_test.go:130: Creating execution project (1): test-acc-tf-p-144044027543314001
2026-07-21T00:52:21.4382735Z     resource_test.go:130: 
2026-07-21T00:52:21.4384663Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:21.4388138Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:52:21.4391623Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:52:21.4395598Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:141
2026-07-21T00:52:21.4399425Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:130
2026-07-21T00:52:21.4401781Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:52:21.4402771Z         	Error:      	Received unexpected error:
2026-07-21T00:52:21.4406680Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:21.4408757Z         	Test:       	TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-07-21T00:52:21.4412325Z         	Messages:   	Project creation failed: test-acc-tf-p-144044027543314001, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:21.4414861Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (116.84s)
```

- 2026-07-22 PASS 5 minutes
- 2026-07-23

### Error 2026-07-23T00:53:54+00:00
```
2026-07-23T00:53:54.2357589Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-07-23T00:53:54.2358260Z     resource_test.go:130: Creating execution project (1): test-acc-tf-p-1618951002558119851
2026-07-23T00:53:54.2358806Z     resource_test.go:130: 
2026-07-23T00:53:54.2359766Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:53:54.2361606Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:53:54.2363466Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:53:54.2365720Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:141
2026-07-23T00:53:54.2367756Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:130
2026-07-23T00:53:54.2369048Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:53:54.2369636Z         	Error:      	Received unexpected error:
2026-07-23T00:53:54.2372548Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:53:54.2374003Z         	Test:       	TestAccPrivateLinkEndpoint_gcpPortMappingEnabled
2026-07-23T00:53:54.2376544Z         	Messages:   	Project creation failed: test-acc-tf-p-1618951002558119851, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:53:54.2378251Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingEnabled (0.74s)
```

- 2026-07-24 PASS 4 minutes
- 2026-07-25 PASS 6 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 5 minutes
- 2026-07-28 PASS 5 minutes
- 2026-07-29 PASS 4 minutes
- 2026-07-30 PASS 7 minutes
- 2026-07-31 PASS 5 minutes
- 2026-08-01 PASS 6 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 4 minutes
- 2026-08-04 PASS 4 minutes
- 2026-08-05 PASS 4 minutes
- 2026-08-06 PASS 6 minutes
- 2026-08-07 PASS 5 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 5 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 5 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 4 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 5 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 5 minutes
  - PASS 6 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 4 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
