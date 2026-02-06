# network/networkpeering/TestAccNetworkRSNetworkPeering_AWSDifferentRegionName Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-03 00:43](#error-2026-02-03t0043220000) | NO_CAPACITY /api/atlas/v2/groups/698143b4b2e54ee99590067c/containers | dev | 5.09s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 3 minutes
- 2026-01-09 PASS 3 minutes
- 2026-01-10 PASS 3 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 3 minutes
- 2026-01-13 PASS 3 minutes
- 2026-01-14 PASS 3 minutes
- 2026-01-15 PASS 3 minutes
- 2026-01-16 PASS 3 minutes
- 2026-01-17 PASS 3 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 3 minutes
- 2026-01-20 PASS 3 minutes
- 2026-01-21 PASS 3 minutes
- 2026-01-22 PASS 4 minutes
- 2026-01-23 PASS 3 minutes
- 2026-01-24 PASS 3 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 3 minutes
- 2026-01-27 PASS 3 minutes
- 2026-01-28 PASS 3 minutes
- 2026-01-29 PASS 3 minutes
- 2026-01-30 PASS 3 minutes
- 2026-01-31 PASS 3 minutes
- 2026-02-01: MISSING
- 2026-02-02 PASS 3 minutes
- 2026-02-03

### Error 2026-02-03T00:43:22+00:00
```
2026-02-03T00:43:22.1613827Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-02-03T00:43:22.1616014Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-02-03T00:43:22.1655524Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2026-02-03T00:43:22.1656111Z     resource_test.go:180: Step 1/1 error: Error running apply: exit status 1
2026-02-03T00:43:22.1656511Z         
2026-02-03T00:43:22.1658433Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b4b2e54ee99590067c/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AWS capacity for group 698143b4b2e54ee99590067c. Reason: Conflict. Params: [AWS 698143b4b2e54ee99590067c], BadRequestDetail: 
2026-02-03T00:43:22.1660031Z         
2026-02-03T00:43:22.1660400Z           with mongodbatlas_network_container.test,
2026-02-03T00:43:22.1661114Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_network_container" "test":
2026-02-03T00:43:22.1661983Z           16: 	resource "mongodbatlas_network_container" "test" {
2026-02-03T00:43:22.1662330Z         
2026-02-03T00:43:22.1674390Z    test_terraform_path=/home/runner/work/_temp/ebd67da4-db6a-45b7-973f-46e1534798c5/terraform test_working_directory=/tmp/plugintest1769455056 test_step_number=1
2026-02-03T00:43:22.1733088Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (5.90s)
```

- 2026-02-04 PASS 3 minutes
- 2026-02-05 PASS 3 minutes
- 2026-02-06 PASS 3 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 3 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 3 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 3 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 3 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 3 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 3 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 3 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
