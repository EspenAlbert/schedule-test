# network/privatelinkendpointservice/TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed Test Details
# Found 33 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-07-14 01:32](#error-2025-07-14t0132530000) |  | dev | 3602.04s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 6 minutes
- 2025-07-03 PASS 6 minutes
- 2025-07-04 PASS 6 minutes
- 2025-07-05 PASS 6 minutes
- 2025-07-06 PASS 5 minutes
- 2025-07-07 PASS 6 minutes
- 2025-07-08 PASS 5 minutes
- 2025-07-09 PASS 6 minutes
- 2025-07-10
  - PASS 5 minutes
  - PASS 5 minutes
- 2025-07-11 PASS 6 minutes
- 2025-07-12 PASS 6 minutes
- 2025-07-13 PASS 5 minutes
- 2025-07-14

### Error 2025-07-14T01:32:53+00:00
```
2025-07-14T01:32:53.7227321Z === RUN   TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed
2025-07-14T01:32:53.7228613Z     resource_privatelink_endpoint_service_test.go:26: Creating execution project: test-acc-tf-p-8500454737909709702
2025-07-14T01:32:53.7245338Z    test_working_directory=/tmp/plugintest423073931 test_name=TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed
2025-07-14T01:32:53.7247117Z     resource_privatelink_endpoint_service_test.go:30: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-07-14T01:32:53.7248125Z         
2025-07-14T01:32:53.7249060Z         Error: error creating MongoDB Private Endpoints Connection: context deadline exceeded
2025-07-14T01:32:53.7249819Z         
2025-07-14T01:32:53.7250462Z           with mongodbatlas_privatelink_endpoint.test,
2025-07-14T01:32:53.7251680Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "test":
2025-07-14T01:32:53.7252973Z           12: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2025-07-14T01:32:53.7253565Z         
2025-07-14T01:32:53.7254202Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed (3602.42s)
```

- 2025-07-15 PASS 5 minutes
- 2025-07-16 PASS 5 minutes
- 2025-07-17 PASS 5 minutes
- 2025-07-18 PASS 5 minutes
- 2025-07-19 PASS 6 minutes
- 2025-07-20 PASS 5 minutes
- 2025-07-21 PASS 5 minutes
- 2025-07-22 PASS 6 minutes
- 2025-07-23
  - PASS 5 minutes
  - PASS 5 minutes
  - PASS 5 minutes
- 2025-07-24 PASS 6 minutes
- 2025-07-25 PASS 5 minutes
- 2025-07-26 PASS 6 minutes
- 2025-07-27 PASS 6 minutes
- 2025-07-28 PASS 5 minutes
- 2025-07-29 PASS 5 minutes
- 2025-07-30 PASS 7 minutes
- 2025-07-31 PASS 6 minutes