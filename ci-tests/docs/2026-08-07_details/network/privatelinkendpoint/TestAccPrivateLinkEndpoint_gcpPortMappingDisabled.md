# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_gcpPortMappingDisabled Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 115.05s
[2026-07-21 00:52](#error-2026-07-21t0052210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.06s
[2026-07-23 00:53](#error-2026-07-23t0053540000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:29+00:00
```
2026-07-09T00:58:29.1637632Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-07-09T00:58:29.1638281Z     resource_test.go:135: Creating execution project (1): test-acc-tf-p-5245570020934339504
2026-07-09T00:58:29.1638815Z     resource_test.go:135: 
2026-07-09T00:58:29.1639898Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:29.1641967Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:29.1643829Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:29.1645811Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:141
2026-07-09T00:58:29.1647852Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:135
2026-07-09T00:58:29.1649338Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T00:58:29.1649939Z         	Error:      	Received unexpected error:
2026-07-09T00:58:29.1652059Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:29.1653233Z         	Test:       	TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-07-09T00:58:29.1655096Z         	Messages:   	Project creation failed: test-acc-tf-p-5245570020934339504, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:29.1656399Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (115.53s)
```

- 2026-07-10 PASS 7 minutes
- 2026-07-11 PASS 6 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 8 minutes
- 2026-07-14 PASS 7 minutes
- 2026-07-15 PASS 7 minutes
- 2026-07-16 PASS 7 minutes
- 2026-07-17 PASS 7 minutes
- 2026-07-18 PASS 7 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:21+00:00
```
2026-07-21T00:52:21.4415780Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-07-21T00:52:21.4416932Z     resource_test.go:135: Creating execution project (1): test-acc-tf-p-669485531482539429
2026-07-21T00:52:21.4417863Z     resource_test.go:135: 
2026-07-21T00:52:21.4419580Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:21.4423032Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:52:21.4426712Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:52:21.4430411Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:141
2026-07-21T00:52:21.4434662Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:135
2026-07-21T00:52:21.4436694Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:52:21.4437545Z         	Error:      	Received unexpected error:
2026-07-21T00:52:21.4440610Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:21.4442367Z         	Test:       	TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-07-21T00:52:21.4445414Z         	Messages:   	Project creation failed: test-acc-tf-p-669485531482539429, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:21.4447566Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (62.59s)
```

- 2026-07-22 PASS 7 minutes
- 2026-07-23

### Error 2026-07-23T00:53:54+00:00
```
2026-07-23T00:53:54.2378783Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-07-23T00:53:54.2379456Z     resource_test.go:135: Creating execution project (1): test-acc-tf-p-5198164016949403914
2026-07-23T00:53:54.2379995Z     resource_test.go:135: 
2026-07-23T00:53:54.2380964Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:53:54.2382810Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:53:54.2384647Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:53:54.2386746Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:141
2026-07-23T00:53:54.2388882Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:135
2026-07-23T00:53:54.2390148Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:53:54.2390721Z         	Error:      	Received unexpected error:
2026-07-23T00:53:54.2393611Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:53:54.2395187Z         	Test:       	TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-07-23T00:53:54.2397593Z         	Messages:   	Project creation failed: test-acc-tf-p-5198164016949403914, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:53:54.2399146Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (0.29s)
```

- 2026-07-24 PASS 6 minutes
- 2026-07-25 PASS 7 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 6 minutes
- 2026-07-28 PASS 7 minutes
- 2026-07-29 PASS 7 minutes
- 2026-07-30 PASS 7 minutes
- 2026-07-31 PASS 10 minutes
- 2026-08-01 PASS 6 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 6 minutes
- 2026-08-04 PASS 7 minutes
- 2026-08-05 PASS 6 minutes
- 2026-08-06 PASS 7 minutes
- 2026-08-07 PASS 7 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 7 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 6 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 6 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 7 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 6 minutes
  - PASS 6 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 7 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
