# control_plane_ip_addresses/controlplaneipaddresses/TestAccControlPlaneIpAddressesDS_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-27 00:27](#error-2025-08-27t0027120000) | UNEXPECTED_ERROR /api/atlas/v2/unauth/controlPlaneIPAddresses | dev | flaky_500 | 0.07s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS a second
- 2025-08-07 PASS 5 seconds
- 2025-08-08 PASS a second
- 2025-08-09 PASS a moment
- 2025-08-10 PASS a second
- 2025-08-11 PASS a moment
- 2025-08-12 PASS a second
- 2025-08-13 PASS a moment
- 2025-08-14 PASS a second
- 2025-08-15 PASS a moment
- 2025-08-16 PASS a second
- 2025-08-17 PASS a second
- 2025-08-18 PASS a moment
- 2025-08-19 PASS a second
- 2025-08-20
  - PASS a second
  - PASS a second
- 2025-08-21 PASS a moment
- 2025-08-22 PASS a moment
- 2025-08-23 PASS a second
- 2025-08-24 PASS a moment
- 2025-08-25 PASS a second
- 2025-08-26 PASS a moment
- 2025-08-27

### Error 2025-08-27T00:27:12+00:00
```
2025-08-27T00:27:12.0281038Z === RUN   TestAccControlPlaneIpAddressesDS_basic
2025-08-27T00:27:12.0282053Z === CONT  TestAccControlPlaneIpAddressesDS_basic
2025-08-27T00:27:12.7023296Z   
2025-08-27T00:27:12.7023906Z     data_source_test.go:12: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-08-27T00:27:12.7024453Z         
2025-08-27T00:27:12.7024865Z         Error: error fetching control plane ip addresses
2025-08-27T00:27:12.7025288Z         
2025-08-27T00:27:12.7025971Z           with data.mongodbatlas_control_plane_ip_addresses.test,
2025-08-27T00:27:12.7027420Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_control_plane_ip_addresses" "test":
2025-08-27T00:27:12.7028668Z           12: data "mongodbatlas_control_plane_ip_addresses" "test" {
2025-08-27T00:27:12.7029230Z         
2025-08-27T00:27:12.7030034Z         https://cloud-dev.mongodb.com/api/atlas/v2/unauth/controlPlaneIPAddresses
2025-08-27T00:27:12.7031165Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-27T00:27:12.7032170Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-27T00:27:12.7032852Z         BadRequestDetail: 
2025-08-27T00:27:12.7257676Z --- FAIL: TestAccControlPlaneIpAddressesDS_basic (0.70s)
```

- 2025-08-28 PASS a moment
- 2025-08-29 PASS a moment
- 2025-08-30 PASS a moment
- 2025-08-31 PASS a second
- 2025-09-01
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
- 2025-09-02 PASS a second
- 2025-09-03 PASS a moment
- 2025-09-04 PASS a moment