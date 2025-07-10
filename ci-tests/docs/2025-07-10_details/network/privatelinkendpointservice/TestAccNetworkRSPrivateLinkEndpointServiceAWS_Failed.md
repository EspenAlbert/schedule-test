# network/privatelinkendpointservice/TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 2)
Success rate: 98.23%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029570000) |  | qa | 0.02s
[2025-06-05 01:28](#error-2025-06-05t0128540000) |  | dev | 3603.03s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 5 minutes
- 2025-04-13 PASS 6 minutes
- 2025-04-14 PASS 5 minutes
- 2025-04-15 PASS 6 minutes
- 2025-04-16
  - PASS 5 minutes
  - PASS 5 minutes
- 2025-04-17 PASS 5 minutes
- 2025-04-18 PASS 5 minutes
- 2025-04-19 PASS 6 minutes
- 2025-04-20 PASS 5 minutes
- 2025-04-21 PASS 5 minutes
- 2025-04-22 PASS 6 minutes
- 2025-04-23 PASS 6 minutes
- 2025-04-24 PASS 6 minutes
- 2025-04-25 PASS 5 minutes
- 2025-04-26 PASS 6 minutes
- 2025-04-27 PASS 5 minutes
- 2025-04-28 PASS 5 minutes
- 2025-04-29 PASS 5 minutes
- 2025-04-30
  - PASS 5 minutes
  - PASS 6 minutes
- 2025-05-01
  - PASS 5 minutes
  - PASS 6 minutes
  - PASS 6 minutes
  - PASS 5 minutes
  - PASS 6 minutes
  - PASS 5 minutes
  - PASS 5 minutes
- 2025-05-02 PASS 5 minutes
- 2025-05-03 PASS 5 minutes
- 2025-05-04 PASS 5 minutes
- 2025-05-05 PASS 5 minutes
- 2025-05-06 PASS 5 minutes
- 2025-05-07 PASS 6 minutes
- 2025-05-08 PASS 5 minutes
- 2025-05-09 PASS 6 minutes
- 2025-05-10 PASS 5 minutes
- 2025-05-11

### Error 2025-05-11T00:29:57+00:00
```
2025-05-11T00:29:57.8932743Z === RUN   TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed
2025-05-11T00:29:57.8933479Z     resource_privatelink_endpoint_service_test.go:26: Creating execution project: test-acc-tf-p-128072013463239083
2025-05-11T00:29:57.8934115Z     resource_privatelink_endpoint_service_test.go:26: 
2025-05-11T00:29:57.8935093Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:57.8936833Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:57.8939180Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_privatelink_endpoint_service_test.go:26
2025-05-11T00:29:57.8940151Z         	Error:      	Received unexpected error:
2025-05-11T00:29:57.8941050Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:57.8941745Z         	Test:       	TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed
2025-05-11T00:29:57.8942842Z         	Messages:   	Project creation failed: test-acc-tf-p-128072013463239083, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:57.8943644Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed (0.23s)
```

- 2025-05-12 PASS 5 minutes
- 2025-05-13
  - PASS 5 minutes
  - PASS 5 minutes
- 2025-05-14 PASS 6 minutes
- 2025-05-15 PASS 5 minutes
- 2025-05-16 PASS 5 minutes
- 2025-05-17 PASS 5 minutes
- 2025-05-18 PASS 5 minutes
- 2025-05-19 PASS 6 minutes
- 2025-05-20 PASS 5 minutes
- 2025-05-21 PASS 5 minutes
- 2025-05-22 PASS 9 minutes
- 2025-05-23 PASS 6 minutes
- 2025-05-24 PASS 5 minutes
- 2025-05-25 PASS 5 minutes
- 2025-05-26 PASS 5 minutes
- 2025-05-27 PASS 5 minutes
- 2025-05-28
  - PASS 7 minutes
  - PASS 5 minutes
- 2025-05-29 PASS 6 minutes
- 2025-05-30 PASS 6 minutes
- 2025-05-31 PASS 8 minutes
- 2025-06-01
  - PASS 5 minutes
  - PASS 5 minutes
  - PASS 5 minutes
  - PASS 5 minutes
  - PASS 6 minutes
  - PASS 5 minutes
- 2025-06-02
  - PASS 5 minutes
  - PASS 5 minutes
  - PASS 5 minutes
- 2025-06-03 PASS 5 minutes
- 2025-06-04 PASS 5 minutes
- 2025-06-05

### Error 2025-06-05T01:28:54+00:00
```
2025-06-05T01:28:54.2564106Z === RUN   TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed
2025-06-05T01:28:54.2565205Z     resource_privatelink_endpoint_service_test.go:26: Creating execution project: test-acc-tf-p-6606863721632294785
2025-06-05T01:28:54.2587862Z    test_name=TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed
2025-06-05T01:28:54.2588813Z     resource_privatelink_endpoint_service_test.go:30: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-06-05T01:28:54.2589467Z         
2025-06-05T01:28:54.2590054Z         Error: error creating MongoDB Private Endpoints Connection: context deadline exceeded
2025-06-05T01:28:54.2590533Z         
2025-06-05T01:28:54.2590933Z           with mongodbatlas_privatelink_endpoint.test,
2025-06-05T01:28:54.2591698Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "test":
2025-06-05T01:28:54.2592409Z           12: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2025-06-05T01:28:54.2592790Z         
2025-06-05T01:28:54.2593189Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed (3603.26s)
```

- 2025-06-06 PASS 5 minutes
- 2025-06-07 PASS 5 minutes
- 2025-06-08 PASS 5 minutes
- 2025-06-09 PASS 6 minutes
- 2025-06-10 PASS 10 minutes
- 2025-06-11
  - PASS 5 minutes
  - PASS 5 minutes
- 2025-06-12 PASS 6 minutes
- 2025-06-13 PASS 6 minutes
- 2025-06-14 PASS 6 minutes
- 2025-06-15 PASS 5 minutes
- 2025-06-16 PASS 6 minutes
- 2025-06-17 PASS 6 minutes
- 2025-06-18 PASS 6 minutes
- 2025-06-19 PASS 6 minutes
- 2025-06-20 PASS 6 minutes
- 2025-06-21 PASS 5 minutes
- 2025-06-22 PASS 6 minutes
- 2025-06-23 PASS 6 minutes
- 2025-06-24 PASS 8 minutes
- 2025-06-25 PASS 5 minutes
- 2025-06-26 PASS 6 minutes
- 2025-06-27 PASS 5 minutes
- 2025-06-28 PASS 5 minutes
- 2025-06-29 PASS 6 minutes
- 2025-06-30 PASS 5 minutes
- 2025-07-01
  - PASS 6 minutes
  - PASS 5 minutes
  - PASS 5 minutes
  - PASS 5 minutes
  - PASS 6 minutes
  - PASS 6 minutes
- 2025-07-02 PASS 6 minutes
- 2025-07-03 PASS 6 minutes
- 2025-07-04 PASS 6 minutes
- 2025-07-05 PASS 6 minutes
- 2025-07-06 PASS 5 minutes
- 2025-07-07 PASS 6 minutes
- 2025-07-08 PASS 5 minutes
- 2025-07-09 PASS 6 minutes
- 2025-07-10 PASS 5 minutes