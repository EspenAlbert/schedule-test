# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_basicAWS Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.03s
[2026-07-11 01:10](#error-2026-07-11t0110390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.09s
[2026-07-14 01:05](#error-2026-07-14t0105410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.06s
[2026-07-18 01:11](#error-2026-07-18t0111270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.01s
[2026-07-21 00:52](#error-2026-07-21t0052210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.05s
[2026-07-23 00:53](#error-2026-07-23t0053540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:29+00:00
```
2026-07-09T00:58:29.1552048Z === RUN   TestAccPrivateLinkEndpoint_basicAWS
2026-07-09T00:58:29.1552664Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-5904591703181670533
2026-07-09T00:58:29.1553181Z     resource_test.go:25: 
2026-07-09T00:58:29.1554124Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:29.1555968Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:29.1557813Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:29.1559986Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:31
2026-07-09T00:58:29.1562043Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:25
2026-07-09T00:58:29.1563306Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T00:58:29.1563862Z         	Error:      	Received unexpected error:
2026-07-09T00:58:29.1565876Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:29.1566960Z         	Test:       	TestAccPrivateLinkEndpoint_basicAWS
2026-07-09T00:58:29.1568782Z         	Messages:   	Project creation failed: test-acc-tf-p-5904591703181670533, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:29.1570362Z --- FAIL: TestAccPrivateLinkEndpoint_basicAWS (67.31s)
```

- 2026-07-10 PASS 3 minutes
- 2026-07-11

### Error 2026-07-11T01:10:39+00:00
```
2026-07-11T01:10:39.0715943Z === RUN   TestAccPrivateLinkEndpoint_basicAWS
2026-07-11T01:10:39.0716869Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-7681467875192197657
2026-07-11T01:10:39.0717500Z     resource_test.go:25: 
2026-07-11T01:10:39.0718621Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:10:39.0723780Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:10:39.0726493Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:10:39.0729053Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:31
2026-07-11T01:10:39.0731864Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:25
2026-07-11T01:10:39.0733238Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T01:10:39.0733840Z         	Error:      	Received unexpected error:
2026-07-11T01:10:39.0735976Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:10:39.0737145Z         	Test:       	TestAccPrivateLinkEndpoint_basicAWS
2026-07-11T01:10:39.0739081Z         	Messages:   	Project creation failed: test-acc-tf-p-7681467875192197657, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:10:39.0740633Z --- FAIL: TestAccPrivateLinkEndpoint_basicAWS (61.90s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 23 minutes
- 2026-07-14

### Error 2026-07-14T01:05:41+00:00
```
2026-07-14T01:05:41.7980732Z === RUN   TestAccPrivateLinkEndpoint_basicAWS
2026-07-14T01:05:41.7981878Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-2004029858433227659
2026-07-14T01:05:41.7984560Z     resource_test.go:25: 
2026-07-14T01:05:41.7986240Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T01:05:41.7990271Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-14T01:05:41.7992519Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-14T01:05:41.7994831Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:31
2026-07-14T01:05:41.7997169Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:25
2026-07-14T01:05:41.7998862Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-14T01:05:41.7999554Z         	Error:      	Received unexpected error:
2026-07-14T01:05:41.8001928Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T01:05:41.8003549Z         	Test:       	TestAccPrivateLinkEndpoint_basicAWS
2026-07-14T01:05:41.8005695Z         	Messages:   	Project creation failed: test-acc-tf-p-2004029858433227659, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T01:05:41.8007102Z --- FAIL: TestAccPrivateLinkEndpoint_basicAWS (67.55s)
```

- 2026-07-15 PASS 3 minutes
- 2026-07-16 PASS 4 minutes
- 2026-07-17 PASS 3 minutes
- 2026-07-18

### Error 2026-07-18T01:11:27+00:00
```
2026-07-18T01:11:27.8317846Z === RUN   TestAccPrivateLinkEndpoint_basicAWS
2026-07-18T01:11:27.8318898Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-6252621431798765066
2026-07-18T01:11:27.8319568Z     resource_test.go:25: 
2026-07-18T01:11:27.8320633Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:11:27.8324778Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:11:27.8326862Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:11:27.8329899Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:31
2026-07-18T01:11:27.8332140Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:25
2026-07-18T01:11:27.8333473Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T01:11:27.8334169Z         	Error:      	Received unexpected error:
2026-07-18T01:11:27.8336136Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:11:27.8337340Z         	Test:       	TestAccPrivateLinkEndpoint_basicAWS
2026-07-18T01:11:27.8338998Z         	Messages:   	Project creation failed: test-acc-tf-p-6252621431798765066, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:11:27.8340263Z --- FAIL: TestAccPrivateLinkEndpoint_basicAWS (62.13s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:21+00:00
```
2026-07-21T00:52:21.4254986Z === RUN   TestAccPrivateLinkEndpoint_basicAWS
2026-07-21T00:52:21.4256643Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-2828997072214293345
2026-07-21T00:52:21.4257911Z     resource_test.go:25: 
2026-07-21T00:52:21.4260369Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:21.4266042Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:52:21.4269960Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:52:21.4274013Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:31
2026-07-21T00:52:21.4277946Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:25
2026-07-21T00:52:21.4280280Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:52:21.4281730Z         	Error:      	Received unexpected error:
2026-07-21T00:52:21.4285711Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:21.4287687Z         	Test:       	TestAccPrivateLinkEndpoint_basicAWS
2026-07-21T00:52:21.4291005Z         	Messages:   	Project creation failed: test-acc-tf-p-2828997072214293345, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:21.4293451Z --- FAIL: TestAccPrivateLinkEndpoint_basicAWS (61.53s)
```

- 2026-07-22 PASS 3 minutes
- 2026-07-23

### Error 2026-07-23T00:53:54+00:00
```
2026-07-23T00:53:54.2290090Z === RUN   TestAccPrivateLinkEndpoint_basicAWS
2026-07-23T00:53:54.2290727Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-6715529040420594983
2026-07-23T00:53:54.2291253Z     resource_test.go:25: 
2026-07-23T00:53:54.2292653Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:53:54.2295949Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:53:54.2297855Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:53:54.2299852Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:31
2026-07-23T00:53:54.2301881Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:25
2026-07-23T00:53:54.2303157Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:53:54.2303740Z         	Error:      	Received unexpected error:
2026-07-23T00:53:54.2305949Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:53:54.2307271Z         	Test:       	TestAccPrivateLinkEndpoint_basicAWS
2026-07-23T00:53:54.2309108Z         	Messages:   	Project creation failed: test-acc-tf-p-6715529040420594983, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:53:54.2310295Z --- FAIL: TestAccPrivateLinkEndpoint_basicAWS (61.42s)
```

- 2026-07-24 PASS 3 minutes
- 2026-07-25 PASS 3 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 3 minutes
- 2026-07-28 PASS 3 minutes
- 2026-07-29 PASS 3 minutes
- 2026-07-30 PASS 3 minutes
- 2026-07-31 PASS 4 minutes
- 2026-08-01 PASS 3 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 3 minutes
- 2026-08-04 PASS 3 minutes
- 2026-08-05 PASS 3 minutes
- 2026-08-06 PASS 3 minutes
- 2026-08-07 PASS 3 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 3 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 3 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 3 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 3 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 3 minutes
  - PASS 3 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 3 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
