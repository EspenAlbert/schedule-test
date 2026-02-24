# network/networkpeering/TestAccNetworkNetworkPeering_timeouts Test Details
# Found 35 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 34) FAIL
Success rate: 97.14%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-03 00:43](#error-2026-02-03t0043220000) | NO_CAPACITY /api/atlas/v2/groups/698143b4b2e54ee995900666/containers | dev | 6.03s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 2 minutes
- 2026-01-27 PASS 2 minutes
- 2026-01-28 PASS 2 minutes
- 2026-01-29 PASS 2 minutes
- 2026-01-30 PASS 2 minutes
- 2026-01-31 PASS 2 minutes
- 2026-02-01: MISSING
- 2026-02-02 PASS 2 minutes
- 2026-02-03

### Error 2026-02-03T00:43:22+00:00
```
2026-02-03T00:43:22.1614874Z === RUN   TestAccNetworkNetworkPeering_timeouts
2026-02-03T00:43:22.1616869Z === CONT  TestAccNetworkNetworkPeering_timeouts
2026-02-03T00:43:22.1726071Z === NAME  TestAccNetworkNetworkPeering_timeouts
2026-02-03T00:43:22.1726766Z     resource_test.go:212: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-03T00:43:22.1727290Z         
2026-02-03T00:43:22.1729309Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b4b2e54ee995900666/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AWS capacity for group 698143b4b2e54ee995900666. Reason: Conflict. Params: [AWS 698143b4b2e54ee995900666], BadRequestDetail: 
2026-02-03T00:43:22.1730645Z         
2026-02-03T00:43:22.1731011Z           with mongodbatlas_network_container.test,
2026-02-03T00:43:22.1731724Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_network_container" "test":
2026-02-03T00:43:22.1732390Z           16: 	resource "mongodbatlas_network_container" "test" {
2026-02-03T00:43:22.1732736Z         
2026-02-03T00:43:22.1734517Z --- FAIL: TestAccNetworkNetworkPeering_timeouts (6.34s)
```

- 2026-02-04 PASS 2 minutes
- 2026-02-05 PASS 2 minutes
- 2026-02-06 PASS 2 minutes
- 2026-02-07 PASS 2 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 2 minutes
- 2026-02-10 PASS 2 minutes
- 2026-02-11 PASS 2 minutes
- 2026-02-12 PASS 2 minutes
- 2026-02-13 PASS 2 minutes
- 2026-02-14 PASS 2 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 2 minutes
- 2026-02-17
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
- 2026-02-18 PASS 2 minutes
- 2026-02-19 PASS 2 minutes
- 2026-02-20 PASS 2 minutes
- 2026-02-21 PASS 2 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 2 minutes
- 2026-02-24 PASS 2 minutes

## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 2 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 2 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 2 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 2 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 2 minutes
  - PASS 2 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 2 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
