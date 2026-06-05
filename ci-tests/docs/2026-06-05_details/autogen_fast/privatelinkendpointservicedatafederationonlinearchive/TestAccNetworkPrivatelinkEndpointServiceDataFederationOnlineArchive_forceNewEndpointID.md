# autogen_fast/privatelinkendpointservicedatafederationonlinearchive/TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_forceNewEndpointID Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 3)
Success rate: 90.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:07](#error-2026-05-09t0107490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.09s
[2026-05-28 01:01](#error-2026-05-28t0101530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s
[2026-06-02 01:16](#error-2026-06-02t0116400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 43 seconds
- 2026-05-08 PASS 43 seconds
- 2026-05-09

### Error 2026-05-09T01:07:49+00:00
```
2026-05-09T01:07:49.3198897Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_forceNewEndpointID
2026-05-09T01:07:49.3199728Z     resource_test.go:207: Creating execution project (1): test-acc-tf-p-2900312207598832887
2026-05-09T01:07:49.3200260Z     resource_test.go:207: 
2026-05-09T01:07:49.3201214Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:07:49.3203093Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:07:49.3204981Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:07:49.3207603Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:207
2026-05-09T01:07:49.3208660Z         	Error:      	Received unexpected error:
2026-05-09T01:07:49.3210674Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.3212084Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_forceNewEndpointID
2026-05-09T01:07:49.3214162Z         	Messages:   	Project creation failed: test-acc-tf-p-2900312207598832887, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.3215634Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_forceNewEndpointID (66.88s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 43 seconds
- 2026-05-12 PASS 44 seconds
- 2026-05-13 PASS 43 seconds
- 2026-05-14 PASS 43 seconds
- 2026-05-15 PASS 43 seconds
- 2026-05-16 PASS 44 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 42 seconds
- 2026-05-19 PASS a minute
- 2026-05-20 PASS 43 seconds
- 2026-05-21 PASS 45 seconds
- 2026-05-22 PASS 44 seconds
- 2026-05-23 PASS 44 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 42 seconds
- 2026-05-26 PASS 44 seconds
- 2026-05-27 PASS 44 seconds
- 2026-05-28

### Error 2026-05-28T01:01:53+00:00
```
2026-05-28T01:01:53.8801279Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_forceNewEndpointID
2026-05-28T01:01:53.8802061Z     resource_test.go:207: Creating execution project (1): test-acc-tf-p-3445982575804161699
2026-05-28T01:01:53.8802568Z     resource_test.go:207: 
2026-05-28T01:01:53.8803416Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:53.8805046Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:53.8806668Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:53.8808734Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:207
2026-05-28T01:01:53.8809672Z         	Error:      	Received unexpected error:
2026-05-28T01:01:53.8812310Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:53.8813870Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_forceNewEndpointID
2026-05-28T01:01:53.8816158Z         	Messages:   	Project creation failed: test-acc-tf-p-3445982575804161699, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:53.8817824Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_forceNewEndpointID (0.35s)
```

- 2026-05-29 PASS 43 seconds
- 2026-05-30 PASS a minute
- 2026-05-31: MISSING
- 2026-06-01 PASS 43 seconds
- 2026-06-02

### Error 2026-06-02T01:16:40+00:00
```
2026-06-02T01:16:40.1201978Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_forceNewEndpointID
2026-06-02T01:16:40.1202847Z     resource_test.go:207: Creating execution project (1): test-acc-tf-p-3150163712738591989
2026-06-02T01:16:40.1203415Z     resource_test.go:207: 
2026-06-02T01:16:40.1204572Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:16:40.1206408Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:16:40.1208242Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:16:40.1210547Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:207
2026-06-02T01:16:40.1211598Z         	Error:      	Received unexpected error:
2026-06-02T01:16:40.1213868Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:40.1215458Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_forceNewEndpointID
2026-06-02T01:16:40.1217497Z         	Messages:   	Project creation failed: test-acc-tf-p-3150163712738591989, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:40.1218946Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_forceNewEndpointID (73.66s)
```

- 2026-06-03 PASS 44 seconds
- 2026-06-04 PASS 43 seconds
- 2026-06-05 PASS 44 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 42 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 44 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 43 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 44 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
