# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidProvider Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058290000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.03s
[2026-07-21 00:52](#error-2026-07-21t0052210000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.06s
[2026-07-23 00:53](#error-2026-07-23t0053540000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:29+00:00
```
2026-07-09T00:58:29.1721471Z === RUN   TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidProvider
2026-07-09T00:58:29.1722228Z     resource_test.go:280: Creating execution project (1): test-acc-tf-p-7387804465910922457
2026-07-09T00:58:29.1722759Z     resource_test.go:280: 
2026-07-09T00:58:29.1723705Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:29.1725582Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:29.1727434Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:29.1729648Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:280
2026-07-09T00:58:29.1730529Z         	Error:      	Received unexpected error:
2026-07-09T00:58:29.1733564Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:29.1735201Z         	Test:       	TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidProvider
2026-07-09T00:58:29.1737754Z         	Messages:   	Project creation failed: test-acc-tf-p-7387804465910922457, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:29.1739640Z --- FAIL: TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidProvider (1.31s)
```

- 2026-07-10 PASS a second
- 2026-07-11 PASS a second
- 2026-07-12: MISSING
- 2026-07-13 PASS a second
- 2026-07-14 PASS a second
- 2026-07-15 PASS a second
- 2026-07-16 PASS a second
- 2026-07-17 PASS a second
- 2026-07-18 PASS a second
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:21+00:00
```
2026-07-21T00:52:21.4507158Z === RUN   TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidProvider
2026-07-21T00:52:21.4507900Z     resource_test.go:280: Creating execution project (1): test-acc-tf-p-8606868169863035920
2026-07-21T00:52:21.4508435Z     resource_test.go:280: 
2026-07-21T00:52:21.4509394Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:21.4511275Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:52:21.4513328Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:52:21.4515345Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:280
2026-07-21T00:52:21.4516224Z         	Error:      	Received unexpected error:
2026-07-21T00:52:21.4519150Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:21.4520800Z         	Test:       	TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidProvider
2026-07-21T00:52:21.4523711Z         	Messages:   	Project creation failed: test-acc-tf-p-8606868169863035920, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:21.4525670Z --- FAIL: TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidProvider (0.60s)
```

- 2026-07-22 PASS a second
- 2026-07-23

### Error 2026-07-23T00:53:54+00:00
```
2026-07-23T00:53:54.2465496Z === RUN   TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidProvider
2026-07-23T00:53:54.2466298Z     resource_test.go:280: Creating execution project (1): test-acc-tf-p-6554222904923138685
2026-07-23T00:53:54.2466870Z     resource_test.go:280: 
2026-07-23T00:53:54.2467856Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:53:54.2469892Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:53:54.2471737Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:53:54.2473707Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:280
2026-07-23T00:53:54.2474574Z         	Error:      	Received unexpected error:
2026-07-23T00:53:54.2477609Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:53:54.2479204Z         	Test:       	TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidProvider
2026-07-23T00:53:54.2481682Z         	Messages:   	Project creation failed: test-acc-tf-p-6554222904923138685, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:53:54.2483306Z --- FAIL: TestAccPrivateLinkEndpoint_awsSupportedRemoteRegionsInvalidProvider (0.46s)
```

- 2026-07-24 PASS a second
- 2026-07-25 PASS a second
- 2026-07-26: MISSING
- 2026-07-27 PASS a second
- 2026-07-28 PASS a second
- 2026-07-29 PASS a second
- 2026-07-30 PASS a second
- 2026-07-31 PASS a second
- 2026-08-01 PASS a second
- 2026-08-02: MISSING
- 2026-08-03 PASS a second
- 2026-08-04 PASS a second
- 2026-08-05 PASS a second
- 2026-08-06 PASS a second
- 2026-08-07 PASS a second

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS a second
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS a second
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS a second
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS a second
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a second
  - PASS a second
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS a second
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
